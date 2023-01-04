import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { initEnvironment } from "lib/RelayEnvironment";
import { NextPage } from "next";
import Link from "next/link";
import router from "next/router";
import ItemDelete from "components/ItemDelete";
import item from "pages/item";

const UserIndexPage: NextPage = () => {
  const environment = initEnvironment({});
  return (
    <QueryRenderer
      environment={environment}
      variables={{}}
      query={graphql`
        query userIndexQuery {
          currentUser {
            email
            id
            items {
              id
              name
              point
              ...ItemDelete_item
            }
          }
        }
      `}
      render={({ error, props }: any) => {
        return (
          <div>
            <h1>マイページ</h1>
            <ul>
              <li>
                <Link href="/signup">ユーザー登録</Link>
              </li>
              <li>
                <Link href="/signin">ログイン</Link>
              </li>
              <li>
                <Link href="/signout">ログアウト</Link>
              </li>
              <li>
                <Link href="/user">マイページ</Link>
              </li>
              <li>
                <Link href="/item">商品一覧</Link>
              </li>

              <li>
                <Link href="/order">売買履歴</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/item/new">商品登録</Link>
              </li>
            </ul>
            <h2>出品商品</h2>
            <div>
              {props?.currentUser?.items?.map((item) => (
                <div key={item.id}>
                  <ul>
                    <li>{item.name}</li>
                    <li>{item.point}</li>
                    <li>
                      <Link href={`/item/${item.id}/edit`}>編集</Link>
                    </li>
                    <li>
                      <ItemDelete item={item} />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

export default UserIndexPage;

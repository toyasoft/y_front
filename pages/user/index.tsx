import ItemDelete from "components/ItemDelete";
import Nav from "components/Nav";
import { initEnvironment } from "lib/RelayEnvironment";
import { NextPage } from "next";
import Link from "next/link";
import { graphql, QueryRenderer } from "react-relay";

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
            point
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
        console.log(props);
        return (
          <div>
            <h1>マイページ</h1>
            <Nav />
            <h3>ユーザー情報</h3>
            <ul>
              <li>メールアドレス：{props?.currentUser.email}</li>
              <li>残りポイント：{props?.currentUser.point}</li>
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

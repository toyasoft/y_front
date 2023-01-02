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
      variables={{
        id: 1,
      }}
      query={graphql`
        query userIndexQuery($id: ID!) {
          user(id: $id) {
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
                <Link href="/item/new">商品登録</Link>
              </li>
            </ul>
            <h2>出品商品</h2>
            <div>
              {props?.user?.items?.map((item) => (
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

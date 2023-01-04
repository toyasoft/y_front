import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { NextPage } from "next";
import { initEnvironment } from "lib/RelayEnvironment";
import OrderCreate from "components/OrderCreate";

const ItemIndexPage: NextPage = () => {
  const environment = initEnvironment({});
  return (
    <QueryRenderer
      environment={environment}
      variables={{
        id: 1,
      }}
      query={graphql`
        query itemIndexQuery {
          items {
            id
            name
            point
            username
            userId
            ...OrderCreate_item
          }
          currentUser {
            id
          }
        }
      `}
      render={({ error, props }: any) => {
        console.log(props);
        return (
          <div>
            <h1>商品一覧</h1>
            <div>
              {props &&
                props.items &&
                props.items.map((item) => (
                  <div key={item.id}>
                    <ul>
                      <li>{item.name}</li>
                      <li>{item.point}</li>
                      {props.currentUser.id !== item.userId && (
                        <OrderCreate item={item} />
                      )}
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

export default ItemIndexPage;

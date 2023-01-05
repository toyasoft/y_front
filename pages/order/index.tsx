import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { NextPage } from "next";
import { initEnvironment } from "lib/RelayEnvironment";
import Nav from "components/Nav";

const OrderIndexPage: NextPage = () => {
  const environment = initEnvironment({});
  return (
    <QueryRenderer
      environment={environment}
      variables={{
        id: 1,
      }}
      query={graphql`
        query orderIndexQuery {
          orders {
            id
            name
            point
            buyer
            seller
            createdAt
          }
        }
      `}
      render={({ error, props }: any) => {
        return (
          <div>
            <h1>売買履歴</h1>
            <Nav />
            <div>
              {props &&
                props.orders &&
                props.orders.map((order) => (
                  <div key={order.id}>
                    <ul>
                      <li>商品名：{order.name}</li>
                      <li>お支払いポイント：{order.point}</li>
                      <li>販売者：{order.buyer}</li>
                      <li>購入者：{order.seller}</li>
                      <li>取引日時：{order.createdAt}</li>
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

export default OrderIndexPage;

import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { NextPage } from "next";
import { initEnvironment } from "lib/RelayEnvironment";

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
            price
            buyer
            seller
          }
        }
      `}
      render={({ error, props }: any) => {
        console.log(props);
        return (
          <div>
            <h1>売買履歴</h1>
            <div>
              {props &&
                props.orders &&
                props.orders.map((order) => (
                  <div key={order.id}>
                    <ul>
                      <li>{order.name}</li>
                      <li>{order.price}</li>
                      <li>{order.buyer}</li>
                      <li>{order.seller}</li>
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

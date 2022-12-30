import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { NextPage } from "next";
import { initEnvironment } from "lib/RelayEnvironment";

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
            price
            username
            image
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
                      <li>{item.price}</li>
                      <li>{item.image}</li>
                      <li>{item.username}</li>
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

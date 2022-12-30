import { graphql, useMutation, QueryRenderer } from "react-relay";
import { NextPage } from "next";
import { useFormik } from "formik";
import { initEnvironment } from "lib/RelayEnvironment";
import ItemUpdate from "components/ItemUpdate";

const ItemEditPage: NextPage = () => {
  const environment = initEnvironment({});

  return (
    <QueryRenderer
      environment={environment}
      variables={{
        id: 1,
      }}
      query={graphql`
        query editItemQuery($id: ID!) {
          item(id: $id) {
            ...ItemUpdate_item
          }
        }
      `}
      render={({ error, props }: any) => {
        return (
          <div>
            <h1>商品編集</h1>
            <ItemUpdate item={props?.item} />
          </div>
        );
      }}
    />
  );
};

export default ItemEditPage;

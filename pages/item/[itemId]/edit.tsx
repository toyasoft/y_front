import { graphql, useMutation, QueryRenderer } from "react-relay";
import { NextPage } from "next";
import { useFormik } from "formik";
import { initEnvironment } from "lib/RelayEnvironment";
import ItemUpdate from "components/ItemUpdate";
import { useRouter } from "next/router";
import Nav from "components/Nav";

const ItemEditPage: NextPage = () => {
  const router = useRouter();
  const environment = initEnvironment({});

  return (
    <QueryRenderer
      environment={environment}
      variables={{
        id: router.query.itemId ?? "",
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
            <Nav />
            {props && <ItemUpdate item={props?.item} />}
          </div>
        );
      }}
    />
  );
};

export default ItemEditPage;

import { useFormik } from "formik";
import item from "pages/item";
import { graphql, useMutation, useFragment, QueryRenderer } from "react-relay";
import { ItemDelete_item$key } from "__generated__/ItemDelete_item.graphql";
import { ItemUpdate_item$key } from "__generated__/ItemUpdate_item.graphql";

type Props = {
  item: ItemDelete_item$key;
};

const ItemDelete: React.FC<Props> = (props) => {
  const item = useFragment(
    graphql`
      fragment ItemDelete_item on Item {
        id
      }
    `,
    props.item
  );

  const [commit, isInFlight] = useMutation(graphql`
    mutation ItemDeleteMutation($input: DeleteItemInput!) {
      deleteItem(input: $input) {
        item {
          id
        }
      }
    }
  `);

  return (
    <button
      type="button"
      onClick={() => {
        commit({
          variables: {
            input: {
              id: item.id,
            },
          },
          onCompleted() {},
          onError(err: any) {
            console.log(err);
          },
        });
      }}
    >
      削除
    </button>
  );
};

export default ItemDelete;

import { useFormik } from "formik";
import { graphql, useMutation, useFragment, QueryRenderer } from "react-relay";
import { OrderCreate_item$key } from "__generated__/OrderCreate_item.graphql";

type Props = {
  item: OrderCreate_item$key;
};

const OrderCreate: React.FC<Props> = (props) => {
  const item = useFragment(
    graphql`
      fragment OrderCreate_item on Item {
        id

      }
    `,
    props.item
  );

  const [commit, isInFlight] = useMutation(graphql`
    mutation OrderCreateMutation($input: CreateOrderInput!) {
      createOrder(input: $input) {
        order {
          id
        }
      }
    }
  `);

  return (
    <div>
       <button type="button" onClick={() => {
        commit({
          variables: {
            input: {
              itemId: item.id,
            },
          },
          onCompleted(data) {
            console.log(data)
          },
          onError(err: any) {
            console.log(err);
          },
        });
       }}>購入する</button>
    </div>
  );
};

export default OrderCreate;

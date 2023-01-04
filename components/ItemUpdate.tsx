import { useFormik } from "formik";
import { useRouter } from "next/router";
import { graphql, useMutation, useFragment, QueryRenderer } from "react-relay";
import { ItemUpdate_item$key } from "__generated__/ItemUpdate_item.graphql";

type Props = {
  item: ItemUpdate_item$key;
};

const ItemUpdate: React.FC<Props> = (props) => {
  const router = useRouter();
  const item = useFragment(
    graphql`
      fragment ItemUpdate_item on Item {
        id
        name
        point
      }
    `,
    props.item
  );

  const [commit, isInFlight] = useMutation(graphql`
    mutation ItemUpdateMutation($input: UpdateItemInput!) {
      updateItem(input: $input) {
        item {
          id
          name
          point
          username
        }
      }
    }
  `);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: item?.id,
      name: item?.name,
      point: item?.point,
    },

    onSubmit: async (values) => {
      commit({
        variables: {
          input: {
            id: values.id,
            name: values.name,
            point: values.point,
          },
        },
        onCompleted(data) {
          router.push("/user");
        },
        onError(err: any) {
          console.log(err);
        },
      });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>商品名</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label>価格</label>
          <input
            type="text"
            name="point"
            onChange={formik.handleChange}
            value={formik.values.point}
          />
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default ItemUpdate;

import { useFormik } from "formik";
import { graphql, useMutation, useFragment, QueryRenderer } from "react-relay";
import { ItemUpdate_item$key } from "__generated__/ItemUpdate_item.graphql";

type Props = {
  item: ItemUpdate_item$key;
};

const ItemUpdate: React.FC<Props> = (props) => {
  const item = useFragment(
    graphql`
      fragment ItemUpdate_item on Item {
        id
        name
        price
        image
        description
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
          price
          username
          image
          description
        }
      }
    }
  `);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
    },

    onSubmit: async (values) => {
      commit({
        variables: {
          input: {
            name: values.name,
            price: values.price,
            image: values.image,
            description: values.description,
          },
        },
        onCompleted() {},
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
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>
        <div>
          <label>画像</label>
          <input
            type="text"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>
        <div>
          <label>説明文</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default ItemUpdate;

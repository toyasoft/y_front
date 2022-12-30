import { graphql, useMutation } from "react-relay";
import { NextPage } from "next";
import { useFormik } from "formik";

const ItemNewPage: NextPage = () => {
  const [commit, isInFlight] = useMutation(graphql`
    mutation newItemMutation($input: CreateItemInput!) {
      createItem(input: $input) {
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
      name: "",
      price: "",
      image: "",
      description: "",
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
      <h1>商品登録</h1>
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
    </div>
  );
};

export default ItemNewPage;

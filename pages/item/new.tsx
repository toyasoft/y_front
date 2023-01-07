import Nav from "components/Nav";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { graphql, useMutation } from "react-relay";

const ItemNewPage: NextPage = () => {
  const router = useRouter();
  const [commit, isInFlight] = useMutation(graphql`
    mutation newItemMutation($input: CreateItemInput!) {
      createItem(input: $input) {
        item {
          id
          name
          point
        }
      }
    }
  `);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      point: "",
    },

    onSubmit: async (values) => {
      commit({
        variables: {
          input: {
            name: values.name,
            point: Number(values.point),
          },
        },
        onCompleted(data) {
          router.push("/user");
          console.log(data);
        },
        onError(err: any) {
          console.log(err);
        },
      });
    },
  });

  return (
    <div>
      <h1>商品登録</h1>
      <Nav />
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
    </div>
  );
};

export default ItemNewPage;

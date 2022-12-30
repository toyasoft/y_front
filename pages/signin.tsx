import { useFormik } from "formik";
import { NextPage } from "next";
import { graphql, useMutation } from "react-relay";

const SigninPage: NextPage = () => {
  const [commit, isInFlight] = useMutation(graphql`
    mutation signinMutation($input: SigninInput!) {
      signin(input: $input) {
        user {
          email
          name
        }
      }
    }
  `);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      commit({
        variables: {
          input: {
            email: values.email,
            password: values.password,
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
      <h1>ログイン</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>メールアドレス</label>
            <input
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <label>パスワード</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <button type="submit">ログイン</button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;

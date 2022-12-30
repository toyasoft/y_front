import { useFormik } from "formik";
import { NextPage } from "next";
import router from "next/router";
import { graphql, useMutation } from "react-relay";

const SignupPage: NextPage = () => {
  const [commit, isInFlight] = useMutation(graphql`
    mutation signupMutation($input: CreateUserInput!) {
      createUser(input: $input) {
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
      name: "",
    },

    onSubmit: async (values) => {
      commit({
        variables: {
          input: {
            email: values.email,
            password: values.password,
            name: values.name,
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
      <h1>ユーザー登録</h1>
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
          <div>
            <label>ユーザー名</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <button type="submit">登録</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

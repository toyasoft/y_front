import Nav from "components/Nav";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { graphql, useMutation } from "react-relay";

const SignupPage: NextPage = () => {
  const router = useRouter();
  const [commit, isInFlight] = useMutation(graphql`
    mutation signupMutation($input: CreateUserInput!) {
      createUser(input: $input) {
        user {
          email
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
        onCompleted(data, errors) {
          console.log(errors);
          if (!errors) {
            router.push("/signin");
          }
        },
        onError(err: any) {
          console.log(err);
        },
      });
    },
  });

  return (
    <div>
      <h1>ユーザー登録</h1>
      <Nav />
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

          <button type="submit">登録</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

import { useFormik } from "formik";
import { NextPage } from "next";
import { graphql, useMutation } from "react-relay";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Nav from "components/Nav";

const SigninPage: NextPage = () => {
  const router = useRouter();
  const [commit, isInFlight] = useMutation(graphql`
    mutation signinMutation($input: SigninInput!) {
      signin(input: $input) {
        user {
          email
        }
        userToken
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
        onCompleted(data) {
          Cookies.set("userToken", data.signin.userToken);
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
      <h1>ログイン</h1>
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
          <button type="submit">ログイン</button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;

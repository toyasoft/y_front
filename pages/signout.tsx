import { NextPage } from "next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Nav from "components/Nav";

const SignoutPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>ログアウト</h1>
      <Nav />
      <button
        type="button"
        onClick={() => {
          Cookies.remove("userToken");
          router.push("/");
        }}
      >
        ログアウト
      </button>
    </div>
  );
};

export default SignoutPage;

import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { initEnvironment } from "../lib/RelayEnvironment";
import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => {
  const environment = initEnvironment({});

  return (
    <div>
      <h1>ホーム</h1>
      <ul>
        <li>
          <Link href="/signup">ユーザー登録</Link>
        </li>
        <li>
          <Link href="/signin">ログイン</Link>
        </li>
        <li>
          <Link href="/signout">ログアウト</Link>
        </li>
        <li>
          <Link href="/user">マイページ</Link>
        </li>
        <li>
          <Link href="/item">商品一覧</Link>
        </li>

        <li>
          <Link href="/order">売買履歴</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;

import Link from "next/link";

const Nav: React.FC = () => {
  return (
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
  );
};

export default Nav;

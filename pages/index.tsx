import { QueryRenderer, graphql, useLazyLoadQuery } from "react-relay";
import { initEnvironment } from "../lib/RelayEnvironment";
import { NextPage } from "next";
import Link from "next/link";
import Nav from "components/Nav";

const IndexPage: NextPage = () => {
  const environment = initEnvironment({});

  return (
    <div>
      <h1>ホーム</h1>
      <Nav />
    </div>
  );
};

export default IndexPage;

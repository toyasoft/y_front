import { RelayEnvironmentProvider } from "react-relay";
import { useEnvironment } from "lib/RelayEnvironment";

export default function App({ Component, pageProps }: any) {
  const environment = useEnvironment(pageProps.initialRecords);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

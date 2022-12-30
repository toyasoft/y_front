import { useMemo } from "react";

import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

import fetchGraphQL from "./fetchGraphQL";

let relayEnvironment: any;

const fetchRelay: FetchFunction = async (params, variables) => {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
};

function createEnvironment() {
  return new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  });
}

export function initEnvironment(initialRecords: any) {
  const environment = relayEnvironment ?? createEnvironment();

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }
  if (typeof window === "undefined") return environment;
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
}

export function useEnvironment(initialRecords: any) {
  const store = useMemo(
    () => initEnvironment(initialRecords),
    [initialRecords]
  );
  return store;
}

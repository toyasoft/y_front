/**
 * @generated SignedSource<<86f28b0ccc4ad869ff765252d76e1a50>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type orderIndexQuery$variables = {};
export type orderIndexQuery$data = {
  readonly orders: ReadonlyArray<{
    readonly buyer: string;
    readonly createdAt: string;
    readonly id: string;
    readonly name: string;
    readonly point: number;
    readonly seller: string;
  }> | null;
};
export type orderIndexQuery = {
  response: orderIndexQuery$data;
  variables: orderIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Order",
    "kind": "LinkedField",
    "name": "orders",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "point",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "buyer",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "seller",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "orderIndexQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "orderIndexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6574f8eb22ac7e4355724f0c06d47b2c",
    "id": null,
    "metadata": {},
    "name": "orderIndexQuery",
    "operationKind": "query",
    "text": "query orderIndexQuery {\n  orders {\n    id\n    name\n    point\n    buyer\n    seller\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "818c3dae2ae005bd0a99685176e9442f";

export default node;

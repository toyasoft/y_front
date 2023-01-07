/**
 * @generated SignedSource<<db305cbbdfa74533ff39b1f683db9088>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type itemIndexQuery$variables = {};
export type itemIndexQuery$data = {
  readonly currentUser: {
    readonly id: string;
  };
  readonly items: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly point: number;
    readonly userId: string;
    readonly " $fragmentSpreads": FragmentRefs<"OrderCreate_item">;
  }>;
};
export type itemIndexQuery = {
  response: itemIndexQuery$data;
  variables: itemIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "point",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "currentUser",
  "plural": false,
  "selections": [
    (v0/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "itemIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrderCreate_item"
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "itemIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ]
  },
  "params": {
    "cacheID": "d50cf795e47bb89d3bf8943700e56e66",
    "id": null,
    "metadata": {},
    "name": "itemIndexQuery",
    "operationKind": "query",
    "text": "query itemIndexQuery {\n  items {\n    id\n    name\n    point\n    userId\n    ...OrderCreate_item\n  }\n  currentUser {\n    id\n  }\n}\n\nfragment OrderCreate_item on Item {\n  id\n}\n"
  }
};
})();

(node as any).hash = "a332bb83d5495d72f8276a316ccbe110";

export default node;

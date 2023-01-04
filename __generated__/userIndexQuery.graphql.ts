/**
 * @generated SignedSource<<533d63ff42cf38a8d877379744d5a28a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userIndexQuery$variables = {};
export type userIndexQuery$data = {
  readonly currentUser: {
    readonly email: string;
    readonly id: string;
    readonly items: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
      readonly point: number;
      readonly " $fragmentSpreads": FragmentRefs<"ItemDelete_item">;
    }> | null;
  };
};
export type userIndexQuery = {
  response: userIndexQuery$data;
  variables: userIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "point",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "userIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ItemDelete_item"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "userIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3df7f36b668a1dc80b26763fd1d66d01",
    "id": null,
    "metadata": {},
    "name": "userIndexQuery",
    "operationKind": "query",
    "text": "query userIndexQuery {\n  currentUser {\n    email\n    id\n    items {\n      id\n      name\n      point\n      ...ItemDelete_item\n    }\n  }\n}\n\nfragment ItemDelete_item on Item {\n  id\n}\n"
  }
};
})();

(node as any).hash = "f74dc5c05c006a99b0a3973226f1c715";

export default node;

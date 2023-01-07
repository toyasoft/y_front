/**
 * @generated SignedSource<<960c54cbb3f4120d11c6c90e13b3258e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateItemInput = {
  clientMutationId?: string | null;
  name: string;
  point: number;
};
export type newItemMutation$variables = {
  input: CreateItemInput;
};
export type newItemMutation$data = {
  readonly createItem: {
    readonly item: {
      readonly id: string;
      readonly name: string;
      readonly point: number;
    };
  } | null;
};
export type newItemMutation = {
  response: newItemMutation$data;
  variables: newItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateItemPayload",
    "kind": "LinkedField",
    "name": "createItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "newItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "newItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "132438c965e7d04a1818523871cd88c3",
    "id": null,
    "metadata": {},
    "name": "newItemMutation",
    "operationKind": "mutation",
    "text": "mutation newItemMutation(\n  $input: CreateItemInput!\n) {\n  createItem(input: $input) {\n    item {\n      id\n      name\n      point\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3408813cfb1b0a47811ff5f6d9b5efbb";

export default node;

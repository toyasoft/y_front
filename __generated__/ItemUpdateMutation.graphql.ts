/**
 * @generated SignedSource<<92247a4b98b1373aa530ec008baefad3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateItemInput = {
  clientMutationId?: string | null;
  id: string;
  name: string;
  point: number;
};
export type ItemUpdateMutation$variables = {
  input: UpdateItemInput;
};
export type ItemUpdateMutation$data = {
  readonly updateItem: {
    readonly item: {
      readonly id: string;
      readonly name: string;
      readonly point: number;
    };
  } | null;
};
export type ItemUpdateMutation = {
  response: ItemUpdateMutation$data;
  variables: ItemUpdateMutation$variables;
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
    "concreteType": "UpdateItemPayload",
    "kind": "LinkedField",
    "name": "updateItem",
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
    "name": "ItemUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4bd1c7907ac31e8af29d3283bce956ab",
    "id": null,
    "metadata": {},
    "name": "ItemUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ItemUpdateMutation(\n  $input: UpdateItemInput!\n) {\n  updateItem(input: $input) {\n    item {\n      id\n      name\n      point\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8e64f8d74f1d5f208ed2e912eaab761";

export default node;

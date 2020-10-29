/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ContactInput = {
    id: string;
    name: string;
    email: string;
};
export type MutationComponentMutationVariables = {
    input: ContactInput;
};
export type MutationComponentMutationResponse = {
    readonly createContact: {
        readonly id: string;
        readonly email: string;
        readonly name: string;
    } | null;
};
export type MutationComponentMutation = {
    readonly response: MutationComponentMutationResponse;
    readonly variables: MutationComponentMutationVariables;
};



/*
mutation MutationComponentMutation(
  $input: ContactInput!
) {
  createContact(input: $input) {
    id
    email
    name
  }
}
*/

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
    "concreteType": "Contact",
    "kind": "LinkedField",
    "name": "createContact",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "MutationComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MutationComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6d3955e7dce6504470aba4ae920aeab4",
    "id": null,
    "metadata": {},
    "name": "MutationComponentMutation",
    "operationKind": "mutation",
    "text": "mutation MutationComponentMutation(\n  $input: ContactInput!\n) {\n  createContact(input: $input) {\n    id\n    email\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '56d84b4e0090172745520d9ac9c279ae';
export default node;

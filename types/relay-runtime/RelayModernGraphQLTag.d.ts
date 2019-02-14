import {ConcreteRequest} from "./RelayConcreteNode";
import {ReaderFragment} from "./ReaderNode";


export type GraphQLTaggedNode =
  |ReaderFragment | ConcreteRequest
  | (() => ReaderFragment | ConcreteRequest)
  | { modern: () => ReaderFragment | ConcreteRequest; };

export function getRequest(taggedNode: GraphQLTaggedNode): ConcreteRequest;

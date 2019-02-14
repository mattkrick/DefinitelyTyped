import {Disposable, Variables} from "./RelayRuntimeTypes";
import {GraphQLTaggedNode} from "./RelayModernGraphQLTag";
import {PayloadError, UploadableMap} from "./RelayNetworkTypes";
import {Environment, SelectorStoreUpdater} from "./RelayStoreTypes";
import {DeclarativeMutationConfig} from "./RelayDeclarativeMutationConfig";

export type MutationConfig<T> = {
  configs?: Array<DeclarativeMutationConfig>;
  mutation: GraphQLTaggedNode;
  variables: Variables;
  uploadables?: UploadableMap;
  onCompleted?: (response: T, errors: Array<PayloadError> | undefined | null) => void | null;
  onError?: (error: Error) => void | null;
  optimisticUpdater?: SelectorStoreUpdater | null;
  optimisticResponse?: Object;
  updater?: SelectorStoreUpdater | null;
};

export function commitRelayModernMutation<T>(environment: Environment, config: MutationConfig<T>): Disposable

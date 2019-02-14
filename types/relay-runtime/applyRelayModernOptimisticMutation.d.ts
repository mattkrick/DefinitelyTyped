import {Disposable, Variables} from "./RelayRuntimeTypes";
import {Environment, SelectorStoreUpdater} from "./RelayStoreTypes";
import {DeclarativeMutationConfig} from "./RelayDeclarativeMutationConfig";
import {GraphQLTaggedNode} from "./RelayModernGraphQLTag";

export type OptimisticMutationConfig = {
  configs?: Array<DeclarativeMutationConfig> | null;
  mutation: GraphQLTaggedNode;
  variables: Variables;
  optimisticUpdater?: SelectorStoreUpdater | null;
  optimisticResponse?: Object;
};
export function applyRelayModernOptimisticMutation(environment: Environment, config: OptimisticMutationConfig): Disposable

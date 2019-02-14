import {Disposable, Variables} from "./RelayRuntimeTypes";
import {GraphQLTaggedNode} from "./RelayModernGraphQLTag";
import {DeclarativeMutationConfig} from "./RelayDeclarativeMutationConfig";
import {Environment, SelectorStoreUpdater} from "./RelayStoreTypes";

export type GraphQLSubscriptionConfig<TSubscriptionPayload> = {
  configs?: Array<DeclarativeMutationConfig>;
  subscription: GraphQLTaggedNode;
  variables: Variables;
  onCompleted?: () => void | null;
  onError?: (error: Error) => void | null;
  onNext?: (response: TSubscriptionPayload | undefined | null) => void | null;
  updater?: SelectorStoreUpdater | null;
};

export function requestRelaySubscription<TSubscriptionPayload>(environment: Environment, config: GraphQLSubscriptionConfig<TSubscriptionPayload>): Disposable

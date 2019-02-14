import {GraphQLTaggedNode} from "./RelayModernGraphQLTag";
import {CacheConfig, OperationType} from "./RelayRuntimeTypes";
import {Environment} from "./RelayStoreTypes";

export function fetchRelayModernQuery<T extends OperationType>(environment: Environment, taggedNode: GraphQLTaggedNode, variables: T["variables"], cacheConfig?: CacheConfig | null): Promise<T["response"]>

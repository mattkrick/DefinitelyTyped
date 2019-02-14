// Type definitions for relay-runtime 2.0.0
// Project: https://github.com/facebook/relay
// Definitions by: Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
//                 Matt Krick <https://github.com/mattkrick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

// Prettified with:
// $ prettier --parser typescript --tab-width 4 --semi --trailing-comma es5 --write --print-width 120 \
//   types/{react-relay,relay-runtime}/{,*}/*.ts*

import {Handler, Store} from "./RelayStoreTypes";
import {RelayModernEnvironment as Environment} from "./RelayModernEnvironment";
import {Network} from "./RelayNetworkTypes";
import {RelayObservable as Observable} from "./RelayObservable";
import {QueryResponseCache} from './RelayQueryResponseCache'
import {RelayInMemoryRecordSource as RecordSource} from './RelayInMemoryRecordSource'
import {areEqualSelectors, getDataIDsFromObject} from "./RelayModernSelector";
import {createFragmentSpecResolver, CUnstableEnvironmentCore, createOperationDescriptor} from './RelayCombinedEnvironmentTypes'

/**
 * SOURCE:
 * Relay 2.0.0
 * https://github.com/facebook/relay/tree/v2.0.0/packages/relay-runtime
 */

// ~~~~~~~~~~~~~~~~~~~~~
// Constants
// ~~~~~~~~~~~~~~~~~~~~~
export const ROOT_ID: string;
export const ConnectionHandler: Handler;
export const ViewerHandler: Handler;

export {
  Environment,
  Network,
  Observable,
  QueryResponseCache,
  RecordSource,
  Store,
  areEqualSelectors,
  createFragmentSpecResolver,
  createOperationDescriptor,
  getDataIDsFromObject,
  // getFragment: RelayModernGraphQLTag.getFragment,
  // getFragmentOwner: RelayModernFragmentOwner.getFragmentOwner,
  // getFragmentOwners: RelayModernFragmentOwner.getFragmentOwners,
  // getPaginationFragment: RelayModernGraphQLTag.getPaginationFragment,
  // getRefetchableFragment: RelayModernGraphQLTag.getRefetchableFragment,
  // getRequest: RelayModernGraphQLTag.getRequest,
  // getSelector: RelayCore.getSelector,
  // getSelectorList: RelayCore.getSelectorList,
  // getSelectorsFromObject: RelayCore.getSelectorsFromObject,
  // getStorageKey: RelayStoreUtils.getStorageKey,
  // getVariablesFromObject: RelayCore.getVariablesFromObject,
  // graphql: RelayModernGraphQLTag.graphql,
  //
  // // Declarative mutation API
  // MutationTypes: RelayDeclarativeMutationConfig.MutationTypes,
  // RangeOperations: RelayDeclarativeMutationConfig.RangeOperations,
  //
  // // Extensions
  // DefaultHandlerProvider: RelayDefaultHandlerProvider,
  // ConnectionHandler: RelayConnectionHandler,
  // ViewerHandler: RelayViewerHandler,
  //
  // // Helpers (can be implemented via the above API)
  // applyOptimisticMutation: applyRelayModernOptimisticMutation,
  // commitLocalUpdate: commitLocalUpdate,
  // commitMutation: commitRelayModernMutation,
  // fetchQuery: fetchRelayModernQuery,
  // isRelayModernEnvironment: isRelayModernEnvironment,
  // requestSubscription: requestRelaySubscription,
  //
  // // Configuration interface for legacy or special uses
  // ConnectionInterface: RelayConnectionInterface,
  //
  // // Utilities
  // RelayProfiler: RelayProfiler,
  //
  // // INTERNAL-ONLY: These exports might be removed at any point.
  // RelayConcreteNode: RelayConcreteNode,
  // RelayError: RelayError,
  // RelayNetworkLoggerTransaction: RelayNetworkLoggerTransaction,
  // DEFAULT_HANDLE_KEY: RelayDefaultHandleKey.DEFAULT_HANDLE_KEY,
  // FRAGMENTS_KEY: RelayStoreUtils.FRAGMENTS_KEY,
  // FRAGMENT_OWNER_KEY: RelayStoreUtils.FRAGMENT_OWNER_KEY,
  // ID_KEY: RelayStoreUtils.ID_KEY,
  // REF_KEY: RelayStoreUtils.REF_KEY,
  // REFS_KEY: RelayStoreUtils.REFS_KEY,
  // ROOT_ID: RelayStoreUtils.ROOT_ID,
  // ROOT_TYPE: RelayStoreUtils.ROOT_TYPE,
  //
  // createRelayNetworkLogger: createRelayNetworkLogger,
  // deepFreeze: deepFreeze,
  // generateClientID: generateRelayClientID,
  // getRelayHandleKey: getRelayHandleKey,
  // isScalarAndEqual: isScalarAndEqual,
  // recycleNodesInto: recycleNodesInto,
  // simpleClone: simpleClone,
  // stableCopy: stableCopy,
  // __internal: {
  // getModernOperationVariables: RelayConcreteVariables.getOperationVariables,
}

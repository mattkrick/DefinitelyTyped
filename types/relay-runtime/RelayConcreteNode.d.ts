import { ReaderFragment } from "./ReaderNode";
import { NormalizationOperation, NormalizationSplitOperation } from "./NormalizationNode";

export type ConcreteRequest = {
    readonly kind: "Request";
    readonly fragment: ReaderFragment;
    readonly operation: NormalizationOperation;
    readonly params: RequestParameters;
};

export type RequestParameters =
    | {
          readonly text: null;
          readonly id: string;
      }
    | BaseRequestParameters
    | {
          readonly text: string;
          readonly id: null;
      }
    | BaseRequestParameters;
type BaseRequestParameters = {
    readonly name: string;
    readonly operationKind: "mutation" | "query" | "subscription";
    readonly metadata: {
        [key: string]: {};
    };
};
export type GeneratedNode = ConcreteRequest | ReaderFragment | NormalizationSplitOperation;

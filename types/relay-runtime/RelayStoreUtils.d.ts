import { Variables } from "./RelayRuntimeTypes";
import { NormalizationArgument, NormalizationField, NormalizationHandle } from "./NormalizationNode";
import { ReaderArgument, ReaderField } from "./ReaderNode";

export type Arguments = {
    [argName: string]: {};
};

function getArgumentValues(
    args: ReadonlyArray<NormalizationArgument | ReaderArgument>,
    variables: Variables
): Arguments;

function getHandleStorageKey(handleField: NormalizationHandle, variables: Variables): string;

export function getStorageKey(
    field: NormalizationField | NormalizationHandle | ReaderField,
    variables: Variables
): string;

function getStableStorageKey(name: string, args: Arguments | undefined | null): string;

function formatStorageKey(name: string, argValues: Arguments | undefined | null): string;

function getStableVariableValue(name: string, variables: Variables): {};

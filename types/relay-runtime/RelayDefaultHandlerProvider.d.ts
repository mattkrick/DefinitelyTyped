import {Handler} from "./RelayStoreTypes";

export type HandlerProvider = (name: string) => Handler | null;

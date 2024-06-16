import {createContext} from "react";

import {SimpleExcursion} from "./simple";

export const rootStoreContext = createContext({
  simple: new SimpleExcursion(),
});

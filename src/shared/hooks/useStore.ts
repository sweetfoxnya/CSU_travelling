import {useContext} from "react";

import {rootStoreContext} from "@shared/stores";

export const useStore = () => useContext(rootStoreContext);

import {createContext} from "react";

import {SimpleExcursion} from "./simple";
import {IterableExcursion} from "./iterable";
import {FullExcursion} from "./full";
import {EventsExcursion} from "./events";
import {CityEventsExcursion} from "./cityEvents";

export const rootStoreContext = createContext({
    simple: new SimpleExcursion(),
    iterable: new IterableExcursion(),
    events: new EventsExcursion(),
    cityEvents: new CityEventsExcursion(),
    full: new FullExcursion(),
});

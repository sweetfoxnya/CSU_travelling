import {makeAutoObservable} from "mobx";

import {ExcursionEvents} from "@widgets/MultiStep";

export class EventsExcursion {
    public data: Partial<ExcursionEvents> = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData = (data: Partial<ExcursionEvents>) => {
        this.data = data;
    }
}

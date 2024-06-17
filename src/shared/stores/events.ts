import {makeAutoObservable} from "mobx";

import {ExcursionEvents} from "@widgets/MultiStep";

export class EventsExcursion {
    public data: Partial<ExcursionEvents> = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData = (data: Partial<ExcursionEvents>) => {
        console.log('params data', {...data})
        console.log('stores data', {...this.data})

        this.data = {
            ...this.data,
            ...data
        };
    }
}

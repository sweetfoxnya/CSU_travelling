import {makeAutoObservable} from "mobx";

import {ExcursionCityEvents} from "@widgets/MultiStep";

export class CityEventsExcursion {
    public data: Partial<ExcursionCityEvents> = {};

    constructor() {
        makeAutoObservable(this);
    }

    public setData = (data: Partial<ExcursionCityEvents>) => {
        console.log('params data', {...data})
        console.log('stores data', {...this.data})

        this.data = {
            ...this.data,
            ...data
        };
    }
}

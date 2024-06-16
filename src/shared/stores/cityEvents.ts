import {makeAutoObservable} from "mobx";

import {ExcursionCityEvents} from "@widgets/MultiStep";

export class CityEventsExcursion {
    public data: Partial<ExcursionCityEvents> = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData = (data: Partial<ExcursionCityEvents>) => {
        this.data = data;
    }
}

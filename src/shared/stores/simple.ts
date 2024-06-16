import {makeAutoObservable} from "mobx";

import {ExcursionSimple} from "@widgets/MultiStep";

export class SimpleExcursion {
    public data: Partial<ExcursionSimple> = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData = (data: Partial<ExcursionSimple>) => {
        this.data = data;
    }
}

import {makeAutoObservable} from "mobx";

import {ExcursionFull} from "@widgets/MultiStep";

export class FullExcursion {
    public data: Partial<ExcursionFull> = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData = (data: Partial<ExcursionFull>) => {
        this.data = {
            ...this.data,
            ...data
        };
    }
}

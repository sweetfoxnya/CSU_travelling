import {makeAutoObservable} from "mobx";

import {ExcursionIterable} from "@widgets/MultiStep";

export class IterableExcursion {
    public data: Partial<ExcursionIterable> = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData = (data: Partial<ExcursionIterable>) => {
        this.data = data;
    }
}

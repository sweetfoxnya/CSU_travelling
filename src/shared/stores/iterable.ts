import {makeAutoObservable} from "mobx";

import {ExcursionIterable} from "@widgets/MultiStep";

export class IterableExcursion {
  public data: Partial<ExcursionIterable> = {};

  constructor() {
    makeAutoObservable(this);
  }

  public setData = (data: Partial<ExcursionIterable>) => {
    console.log('data',data)
    this.data = {
      ...this.data,
      ...data
    };
  }
}

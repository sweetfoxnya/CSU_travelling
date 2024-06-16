import {makeAutoObservable} from "mobx";

export class SimpleExcursion {
  public data: Partial<unknown> = {};

  constructor() {
    makeAutoObservable(this);
  }

  get() {
    return this.data;
  }

  setData = (data: Partial<SimpleExcursion>) => {
    this.data = data;
  }
}

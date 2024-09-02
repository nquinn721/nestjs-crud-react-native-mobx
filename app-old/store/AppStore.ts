import { makeObservable, observable, action } from "mobx";

class AppStore {
  value = 0;

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
    });
  }

  increment() {
    // Intermediate states will not become visible to observers.
    this.value++;
  }
}

const appStore = new AppStore();
export default appStore;

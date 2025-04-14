import { SystemIDGenerator } from "../shared/system-id-generator";
import { Dependencies } from "../store/dependencies";
import { AppStore, createStore } from "../store/store";

class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {
      idGenerator: new SystemIDGenerator(),
    };
  }
}

export const app = new App();


import { createContext, useContext } from "react";
import HomeStore from "./HomeStore";
import ServiceStore from "./ServiceStore";
import AuthStore from "./AuthStore";

export class RootStore {
    home: HomeStore;
    service: ServiceStore;
    auth: AuthStore
  
    constructor() {
      this.home = new HomeStore()
      this.service = new ServiceStore()
      this.auth = new AuthStore()
    }
}
  
export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
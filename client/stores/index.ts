
import { createContext, useContext } from "react";
import HomeStore from "./HomeStore";
import ServiceStore from "./ServiceStore";

export class RootStore {
    home: HomeStore;
    service: ServiceStore;
  
    constructor() {
      this.home = new HomeStore()
      this.service = new ServiceStore()
    }
}
  
export const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
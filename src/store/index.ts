import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import employees, { IEmployeeState } from './modules/employees';

export interface State {
  employees: IEmployeeState
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    employees
  }
})

export function useStore() {
  return baseUseStore(key)
}

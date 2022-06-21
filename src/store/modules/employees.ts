import { IEmployee } from '@/modules/employee/interface/IEmployee';
import { api } from "../../api/helpers";

export interface IEmployeeState {
    employees: IEmployee[]
}

export default {
    state: (): IEmployeeState => ({
        employees: [],
    }),
    getters: {
        allEmployees(state: IEmployeeState, getters: any) {
            return state.employees;
        }
    },
    mutations: {
        setEmployees(state: IEmployeeState, employees: any) {
            state.employees = employees;
        }
    },
    actions: {
        async fetchEmployees(context: any) {
            const employees = await api.getEmployees();
            context.commit('setEmployees', employees);
        }
    },
    modules: {
    }
}

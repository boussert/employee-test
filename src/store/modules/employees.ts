import { IEmployee } from '@/modules/employee/interface/IEmployee';
import { api } from "../../api/helpers";

export interface IEmployeeState {
    employees: IEmployee[],
    pagination: {
        /** Current page index */
        currentPage: number,
        /** Number of results per page */
        resultsPerPage: number
    }
}

export default {
    state: (): IEmployeeState => ({
        employees: [],
        pagination: {
            currentPage: 1,
            resultsPerPage: 5
        }
    }),
    getters: {
        allEmployees(state: IEmployeeState, getters: any) {
            return state.employees;
        },
        nbPages(state: IEmployeeState, getters: any) {
            return Math.ceil(state.employees.length / state.pagination.resultsPerPage);
        },
        currentPage(state: IEmployeeState, getters: any) {
            return state.pagination.currentPage - 1;
        },
        resultsPerPage(state: IEmployeeState, getters: any) {
            return state.pagination.resultsPerPage;
        }
    },
    mutations: {
        setEmployees(state: IEmployeeState, employees: IEmployee[]) {
            state.employees = employees;
        },
        setCurrentPage(state: IEmployeeState, currentPage: number) {
            state.pagination.currentPage = currentPage;
        }
    },
    actions: {
        async fetchEmployees(context: any) {
            const employees = await api.getEmployees();
            context.commit('setEmployees', employees);
        },
        setCurrentPage(context: any, currentPage: number) {
            context.commit('setCurrentPage', currentPage);
        }
    },
    modules: {
    }
}

import { IEmployee } from '@/modules/employee/interface/IEmployee';

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
            // const employees = await api.getEmployees();
            const employees: any[] = [{
                "id": 1,
                "name": "Calida MacGahy",
                "job_title": "Account Coordinator",
                "department": "Engineering",
                "company_name": "Browsedrive",
                "experience_in_job": 3
            }, {
                "id": 2,
                "name": "MacGahy",
                "job_title": "Account Coordinator",
                "department": "Engineering",
                "company_name": "Browsedrive",
                "experience_in_job": 3
            }, {
                "id": 3,
                "name": "Calida",
                "job_title": "Account Coordinator",
                "department": "Engineering",
                "company_name": "Browsedrive",
                "experience_in_job": 3
            }];
            context.commit('setEmployees', employees);
        }
    },
    modules: {
    }
}

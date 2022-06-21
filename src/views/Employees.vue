<template>
  <div class="overflow-hidden flex flex-col flex-auto">
    <div class="flex items-center">
      <h1 class="flex-auto">Employees</h1>
      <div>
        <el-input v-model="searchQuery" placeholder="Search an employee" />
      </div>
    </div>
    <ul class="employees-grid flex-auto list-none overflow-auto">
      <li v-for="(employee, index) in employees.slice(paginationMinIndex, paginationMaxIndex)" :key="index">
        <EmployeeCard :employee="employee"></EmployeeCard>
      </li>
    </ul>
    <el-pagination hide-on-single-page background layout="prev, pager, next" :page-size="5" :total="employees.length" @current-change="handlePaginationCurrentChange"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import EmployeeCard from "../modules/employee/components/EmployeeCard.vue";
import { useStore } from "../store";

@Options({
  components: { EmployeeCard },
  computed: {
    ...mapGetters({
        employees: "allEmployees",
        nbPages: "nbPages",
        currentPage: "currentPage",
        resultsPerPage: "resultsPerPage"
    })
  }
})
export default class Employees extends Vue {
  searchQuery = '';
  store = useStore();

  async mounted() {
    this.store.dispatch("fetchEmployees");
  }

  get paginationMinIndex(): number {
    return this.store.getters.currentPage * this.store.getters.resultsPerPage; 
  }

  get paginationMaxIndex(): number {
    return this.paginationMinIndex + this.store.getters.resultsPerPage; 
  }

  handlePaginationCurrentChange(currentPage: number) {
    this.store.dispatch("setCurrentPage", currentPage);
  }
}
</script>

<style lang="scss" scoped>
.employees-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    align-content: flex-start;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 430px), 1fr));
}
</style>

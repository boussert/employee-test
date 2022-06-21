<template>
  <div>
    <div class="flex items-center">
      <h1 class="flex-auto">Employees</h1>
      <div>
        <el-input v-model="searchQuery" placeholder="Search an employee" />
      </div>
    </div>
    <ul class="employees-grid list-none">
      <li v-for="(employee, index) in employees" :key="index">
        <EmployeeCard :employee="employee"></EmployeeCard>
      </li>
    </ul>
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
        employees: "allEmployees"
    })
  }
})
export default class Employees extends Vue {
  searchQuery = '';
  store = useStore();

  async mounted() {
    this.store.dispatch("fetchEmployees");
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

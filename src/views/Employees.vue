<template>
  <div>
    <div style="display: flex; align-items: center;">
      <h1 style="flex: 1 1 auto;">Employees</h1>
      <div>
        <input type="text" placeholder="Filter">
      </div>
    </div>
    <ul class="employees-grid">
      <li>
        <EmployeeCard v-for="(employee, index) in employees" :key="index" :employee="employee"></EmployeeCard>
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
  store = useStore();

  async mounted() {
    this.store.dispatch("fetchEmployees");
  }
}
</script>

<style lang="scss" scoped>
</style>

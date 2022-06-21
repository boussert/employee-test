<template>
  <div class="card card--employee">
    <div class="card__image">
        <img src="https://www.etftrends.com/wp-content/uploads/2018/02/Finanical-Planning-for-employee-stock-options..jpg" :alt="'Headshot of the employee ' + employee.name">
    </div>
    <div class="card__content">
        <p class="card__subtitle">{{employee.job_title}}</p>
        <h2 class="card__title">{{employee.name}}</h2>
        <p>
            <span>icon location</span>
            <span>{{employee.department}}</span>
            <span>{{employee.company_name}}</span>
        </p>
    </div>
    <div class="tag">{{employee.experience_in_job}} ans</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    employee: {
      type: Object,
      required: true
    },
  },
})
export default class EmployeeCard extends Vue {
  employee: any;
}
</script>

<style scoped lang="scss">

</style>

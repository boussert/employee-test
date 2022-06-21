<template>
  <div class="card card--employee">
    <div class="card__image">
        <img src="https://www.etftrends.com/wp-content/uploads/2018/02/Finanical-Planning-for-employee-stock-options..jpg" :alt="'Headshot of the employee ' + employee.name">
    </div>
    <div class="card__content">
        <div class="card__subtitle-container">
          <p class="card__subtitle">{{employee.job_title}}</p>
          <div class="tag">{{employee.experience_in_job}} years</div>
        </div>
        <h2 class="card__title">{{employee.name}}</h2>
        <p class="flex gap-2 items-center">
            <span class="material-icons"> work </span>
            <span>{{employee.department}} at {{employee.company_name}}</span>
        </p>
    </div>
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
}
</script>

<style scoped lang="scss">
.card--employee {
  .tag {
    flex-shrink: 0;
  }

  .material-icons {
    font-size: 18px;
  }
}
</style>

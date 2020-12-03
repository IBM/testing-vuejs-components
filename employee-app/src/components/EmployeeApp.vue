<template>
    <EmployeeList :employeeData="employeeData" :columns="columns"/>
</template>
<script>
import EmployeeList from './EmployeeList.vue'

export default {
  name: 'EmployeeApp',
  components: {EmployeeList},
  data() {
    return {

      columns: [
        "First Name",
        "Last Name",
        "Date of Birth",
        "Employment Start Date",
        "Employment End Date",
        "Salary"
      ],
      employeeData: [
        [
          "Joe",
          "Stevenson",
          "10-Apr-1956",
          "21-Jan-2015",
          "",
          "50,000"
        ],
        [
          "Mary",
          "Jones",
          "20-Feb-1976",
          "27-Mar-2010",
          "27-Mar-2019",
          "80,000"
        ],
        [
          "Patrick",
          "Smith",
          "10-Mar-1982",
          "01-Jul-2013",
          "",
          "100,000"
        ],
      ],
    };
  },
  methods: {
    onClick() {
      this.visible = true;
    },
    modalClosed() {
      this.visible = false;
    },
  },
};
</script>
<style>
  .cv-text-input {
    margin: 30px 0;
  }
</style>
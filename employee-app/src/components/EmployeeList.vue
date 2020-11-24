<template>
  <div class="table-display">
    <AddUser
      v-if="addUserVisible"
      :visible="addUserVisible"
      :size="'medium'"
      :closeAriaLabel="'Close'"
      @add-user="addNewUser"
      @cancel-user="cancelUser"
    />
    <cv-data-table
      :columns="columns"
      @search="onFilter"
      :data="filteredUsers" ref="table">
    </cv-data-table>
    <cv-button small @click="addUserVisible = true" class="add-user">Add new</cv-button>
  </div>
</template>
<script>
import AddUser from './AddUser.vue'

  export default {
    name: 'EmployeeList',
    components: {AddUser},
    props: {
      columns: Array,
      employeeData: Array
    },
    data() {
      return {
        searchCriteria: "",
        employees: [],
        addUserVisible: false
      };
    },
    created() {
        this.employees = this.employeeData;
    },
    computed: {
        filteredUsers() {
            return this.employees.filter((employee) => {
                let empFound = employee.filter((empField) => {
                    return empField.toLowerCase().includes(this.searchCriteria.toLowerCase());
                });
                return empFound.length > 0;
            });
        }
    },
    methods: {
      addNewUser(user) {
          this.searchCriteria = "";
          this.employees.push(user);
          this.addUserVisible = false;
      },
      cancelUser() {
          this.addUserVisible = false;
      },
      onFilter(filterString) {
          this.searchCriteria = filterString;
      }
    },
  };
</script>
<style>

.table-display {
    top: 3rem;
    margin: 47px auto;
    width: 1200px;
}

.add-user {
    float: right;
}

</style>
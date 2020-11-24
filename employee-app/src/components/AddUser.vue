<template>
  <cv-modal
    :close-aria-label="closeAriaLabel"
    :size="size"
    :visible="visible"
    @modal-shown="actionShown"
    @modal-hide-request="$emit('cancel-user')"
    @primary-click="addUser"
    @secondary-click="$emit('cancel-user')"
    :auto-hide-off="true"
  >
    <template slot="title">New Employee</template>
    <template slot="content">
      <cv-text-input
        class="first-name"
        label="First Name"
        v-model="firstName"
        :invalid-message="
          firstName === '' && validatingUser ? requiredFieldMessage : ''
        "
      >
      </cv-text-input>
      <cv-text-input
        class="last-name"
        label="Last Name"
        v-model="lastName"
        :invalid-message="
          lastName === '' && validatingUser ? requiredFieldMessage : ''
        "
      >
      </cv-text-input>
      <cv-date-picker
        class="date-of-birth"
        kind="simple"
        date-label="Date of Birth"
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        placeholder="mm/dd/yyyy"
        v-model="dateOfBirth"
        :invalid-message="
          dateOfBirth === '' && validatingUser ? requiredFieldMessage : ''
        "
      />
      <cv-text-input
        class="salary"
        label="Salary"
        v-model="salary"
        :invalid-message="
          salary === '' && validatingUser ? requiredFieldMessage : ''
        "
      >
      </cv-text-input>
      <cv-date-picker
        class="emp-start-date"
        kind="simple"
        date-label="Employment Start Date"
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        placeholder="mm/dd/yyyy"
        v-model="employmentStartDate"
        :invalid-message="
          employmentStartDate === '' && validatingUser
            ? requiredFieldMessage
            : ''
        "
      />
      <cv-date-picker
        class="emp-end-date"
        kind="simple"
        date-label="Employment End Date"
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        placeholder="mm/dd/yyyy"
        v-model="employmentEndDate"
      />
    </template>
    <template slot="secondary-button">Cancel</template>
    <template slot="primary-button">Add</template>
  </cv-modal>
</template>
<script>
export default {
  name: "AddUser",
  props: {
    closeAriaLabel: String,
    size: String,
    visible: Boolean,
  },
  data() {
    return {
      validatingUser: false,
      requiredFieldMessage: "Required Field",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      employmentStartDate: "",
      employmentEndDate: "",
      salary: "",
    };
  },
  methods: {
    addUser() {
      this.validatingUser = true;
      if (this.isValidUser()) {
        const newUser = [
          this.firstName,
          this.lastName,
          this.dateOfBirth,
          this.employmentStartDate,
          this.employmentEndDate,
          this.salary,
        ];

        this.$emit("add-user", newUser);
        this.validatingUser = false;
      }
    },
    isValidUser() {
      return (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.dateOfBirth !== "" &&
        this.employmentStartDate !== "" &&
        this.salary !== ""
      );
    },
    actionShown() {
      this.validatingUser = false;
      this.firstName = "";
      this.lastName = "";
      this.dateOfBirth = "";
      this.employmentStartDate = "";
      this.employmentEndDate = "";
      this.salary = "";
      this.missingRequiredFields = [];
    },
  },
};
</script>
<style>
.cv-text-input {
  margin: 10px 0;
}
.cv-date-picker {
  margin: 10px 0;
}
</style>
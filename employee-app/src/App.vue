<template>
  <div id="app">
    <cv-header aria-label="Carbon header">
      <cv-header-name href="javascript:void(0)" prefix="IBM">
        [Employee App]
      </cv-header-name>
    </cv-header>
    <EmployeeApp/>
  </div>
</template>

<script>
import EmployeeApp from './components/EmployeeApp.vue'


export default {
  name: 'App',
  components: {
    EmployeeApp
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

</style>

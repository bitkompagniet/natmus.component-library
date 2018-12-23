<template>
  <div id="app">
    <navigation-topbar>
      <div><router-link to="/">Structure</router-link></div>
      <div><router-link to="/">Formatting</router-link></div>
      <div><router-link to="/forms">Forms</router-link></div>
    </navigation-topbar>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>


<style lang="scss">
// @import './assets/scss/app.scss';
.grey {
  background-color: #ccc;
}
</style>

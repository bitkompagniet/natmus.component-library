<template>
  <div id="app">
    <navigation-topbar />
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>


<style lang="scss">
@import './assets/scss/app.scss';
.grey {
  background-color: #ccc;
}
</style>

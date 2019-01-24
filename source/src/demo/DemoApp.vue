<template>
  <div id="app">
    <n-nav-topbar complex>
      <b-nav-item to="/">Structure</b-nav-item>
      <b-nav-item to="/components">Components</b-nav-item>
      <b-nav-item to="/forms">Forms</b-nav-item>
      <b-nav-item to="/bootstrap-styling">Bootstrap styling</b-nav-item>
      <b-nav-item to="/full">Full page example</b-nav-item>
      <b-nav-item to="/text-page">Example: Text</b-nav-item>
      <b-nav-item to="/step-page">Example: Steps</b-nav-item>
    </n-nav-topbar>
    <router-view />
    <n-footer>
      <b-row>
        <b-col>BL</b-col>
        <b-col>NM</b-col>
        <b-col>Kontakt</b-col>
        <b-col>Mere</b-col>
      </b-row>
    </n-footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DemoApp',
};
</script>


<style lang="scss">
.grey {
  background-color: #ccc;
}
</style>

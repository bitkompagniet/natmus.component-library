<template>
  <div id="app">
    <n-nav-topbar complex>
      <b-nav-item to="/">Structure</b-nav-item>
      <b-nav-item to="/components">Components</b-nav-item>
      <b-nav-item to="/forms">Forms</b-nav-item>
      <b-nav-item to="/bootstrap-styling">Styling</b-nav-item>
      <b-nav-item to="/text-page">Example: Text</b-nav-item>
      <b-nav-item to="/step-page">Example: Steps</b-nav-item>
      <b-nav-item to="/full">Example: Mix</b-nav-item>
    </n-nav-topbar>
    <router-view />
    <n-footer>
      <b-row>
        <b-col><img src="../assets/images/BL.svg" style="width: 120px" /></b-col>
        <b-col><n-logo white /></b-col>
        <b-col>
          <h3>Generelt</h3>
          <ul>
            <li>Om os</li>
            <li>Projektet</li>
            <li>Vejledning</li>
          </ul>
        </b-col>
        <b-col>
          <h3>Følg os</h3>
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Website</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          I samarbejde med BL - Danmarks Almene Boliger
        </b-col>
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

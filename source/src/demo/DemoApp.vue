<template>
  <div id="app">
    <n-nav-topbar complex>
      <b-nav-item to="/">Structure</b-nav-item>
      <b-nav-item to="/elements">Elements</b-nav-item>
      <b-nav-item to="/forms">Forms</b-nav-item>
      <b-nav-item to="/full">Full page example</b-nav-item>
    </n-nav-topbar>
    <router-view />
    <n-footer>
      <p>This is a footer.</p>
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

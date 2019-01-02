<template>
  <div id="app">
    <n-nav-topbar>
      <div><router-link to="/">Structure</router-link></div>
      <div><router-link to="/elements">Elements</router-link></div>
      <div><router-link to="/forms">Forms</router-link></div>
    </n-nav-topbar>
    <router-view />
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

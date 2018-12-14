<template>
  <div id="app">
    <b-container>

      <b-row>
        <b-col>
          <div class="grey">A</div>
        </b-col>
        <b-col>
          <div class="grey">B</div>
        </b-col>
        <b-col>
          <div class="grey">C</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-alert show>ALERT</b-alert>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "app",
  components: {
    HelloWorld
  }
});
</script>

<style lang="scss">
@import './assets/scss/app.scss';

#app {
}

.grey {
  background-color: #ccc;
}
</style>

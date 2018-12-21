<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <top-navigation />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>    
  </div>
</template>

<script lang="ts">
import TopNavigation from '@/components/local/TopNavigation.vue';

export default {
  name: 'App',
  components: {
    TopNavigation,
  },
};
</script>


<style lang="scss">
@import './assets/scss/app.scss';
.grey {
  background-color: #ccc;
}
</style>

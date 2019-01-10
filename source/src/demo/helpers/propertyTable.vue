<template>
  <b-table class="n-style" :fields="[
        { key: 'name', sortable: true, class: 'no-wrap' },
        { key: 'type', class: 'no-wrap' },
        { key: 'default', class: 'no-wrap' },
        { key: 'description' }
    ]" :items="items">
    <template slot="name" slot-scope="data">
      <code>{{ data.value }}</code>
    </template>
    <template slot="type" slot-scope="data">
      <code>{{ data.value }}</code>
    </template>
    <template slot="default" slot-scope="data">
      <code>{{ data.value }}</code>
    </template>
  </b-table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        items: Array,
    } 
});
</script>

<style lang="scss">

.no-wrap {
    white-space: nowrap;
}

</style>

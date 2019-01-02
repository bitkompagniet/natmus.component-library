<template>
  <b-table striped :fields="[
        { key: 'name', sortable: true, class: 'no-wrap' },
        { key: 'scope', class: 'no-wrap' },
        { key: 'description', class: 'no-wrap' }
    ]" :items="items">
    <template slot="name" slot-scope="data">
      <code>{{ data.value }}</code>
    </template>
    <template slot="scope" slot-scope="data">
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

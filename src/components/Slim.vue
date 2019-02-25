<template>
    <b-row>
        <b-col cols="12" offset-md="2" md="8" offset-lg="3" lg="6">
            <slot></slot>
        </b-col>
    </b-row>
</template>

<script lang="ts">
import Vue from 'vue';

import bRow from 'bootstrap-vue/es/components/layout/row';
import bCol from 'bootstrap-vue/es/components/layout/col';

export default Vue.extend({
    components: {
        'b-row': bRow,
        'b-col': bCol,
    }
})
</script>

<template>
    <div class="page-title n-style">
        <h1>{{ title }} <small>{{ subtitle }}</small></h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
        subtitle: {
            type: String,
            default: null,
            required: false,
        }
    }
});
</script>

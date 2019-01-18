<template>
    <img 
        src="../assets/images/nationalmuseum_logo.png" 
        alt="Nationalmuseet"
        v-if="!full && !white"
    />
    <img 
        src="../assets/images/nationalmuseum_logo_full.png" 
        alt="Nationalmuseet"
        v-else-if="full && !white"
    />
    <img 
        src="../assets/images/nationalmuseum_logo_white.png" 
        alt="Nationalmuseet"
        v-else-if="!full && white"
    />
    <img 
        src="../assets/images/nationalmuseum_logo_full_white.png" 
        alt="Nationalmuseet"
        v-else-if="full && white"
    />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        white: {
            type: Boolean,
            default: false,
        },
        full: {
            type: Boolean,
            default: false,
        }
    }
});
</script>

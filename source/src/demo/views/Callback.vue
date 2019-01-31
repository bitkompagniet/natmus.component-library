<template>
    <div>
        <n-wait :until="false" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    mounted() {
        if (this.$auth != null) {
            this.$auth.handleAuthentication().then((data: { passthrough: string | null }) => {
                if (data.passthrough) {
                    this.$router.push({ name: data.passthrough });
                }
            });
        }
        
    }
});
</script>

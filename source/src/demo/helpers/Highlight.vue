<template>
    <pre v-highlightjs><code :class="lang">{{ escaped }}</code></pre>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
   props: {
       lang: String,
   },
   computed: {
       escaped(): string | null {
           let d = this.$slots.default;

           if (this.$slots.default && this.$slots.default.length > 0) {
               const text = this.$slots.default[0].text;
               if (text) {
                   return text.trim();
               }
           }
           
           return null;
       }
   },
   mounted() {
       console.log(this.$slots);
   }
});
</script>

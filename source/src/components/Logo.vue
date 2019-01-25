<template>
    <img 
        src="../assets/images/nm_logo.svg" 
        alt="Nationalmuseet"
        v-if="!full && !white"
        :style="styles"
        @click="$emit('click')"
    />
    <img 
        src="../assets/images/nm_logo_full.svg" 
        :alt="styles.width"
        v-else-if="full && !white"
        :style="styles"
        @click="$emit('click')"
    />
    <img 
        src="../assets/images/nm_logo_white.svg" 
        alt="Nationalmuseet"
        v-else-if="!full && white"
        :style="styles"
        @click="$emit('click')"
    />
    <img 
        src="../assets/images/nm_logo_white_full.svg" 
        alt="Nationalmuseet"
        v-else-if="full && white"
        :style="styles"
        @click="$emit('click')"
    />
</template>

<script lang="ts">
import Vue from 'vue';

interface IComputedStyles {
    width?: string;
    cursor?: string;
}

export default Vue.extend({
    props: {
        white: {
            type: Boolean,
            default: false,
        },
        full: {
            type: Boolean,
            default: false,
        },
        width: {
            type: Number,
            default: 0
        }
    },
    computed: {
        styles(): IComputedStyles {
            let result : IComputedStyles = {};

            if (this.width > 0) {
                result.width = this.width + 'px';
            }

            if (this.$listeners.click) {
                result.cursor = 'pointer';
            }

            return result;
        }
    }
});
</script>

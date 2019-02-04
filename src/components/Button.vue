<template>
    <b-button class="n-style" :variant="variant" :disabled="disabled" @click="$emit('click')">
        <span v-if="isIconSet" style="margin-right: 0.4em;">
            <font-awesome-icon :icon="icon" />
        </span>
        <slot></slot>
    </b-button>
</template>

<script lang="ts">
import Vue from 'vue';
import bButton from 'bootstrap-vue/es/components/button';

const variants : string[] = ['primary', 'secondary', 'darkred', 'lightgrey', 'rose'];

export default Vue.extend({
    components: {
        'b-button': bButton,
    },
    props: {
        icon: String,
        disabled: Boolean,
        variant: {
            type: String,
            default: 'secondary',
            validator: (value: string) => variants.indexOf(value) !== -1,
        }
    },
    computed: {
        isIconSet(): boolean {
            return this.icon != null && this.icon !== '';
        }
    }
});
</script>

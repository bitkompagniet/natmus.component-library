<template>
    <div class="checkbox-with-label" @click="update">
        <div class="checkbox" :class="{ checked: value }">{{ value ? '✔' : '' }}</div>
        <div class="label"><slot></slot></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        value: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        update()  {
            this.$emit('input', !this.value);
        }
    }
});
</script>

<style lang="scss" scoped>

@mixin q($size) {
    width: $size;
    height: $size;
}

.checkbox-with-label {
    display: flex;
    align-items: center;
    cursor: default;
}

.checkbox {    
    display: inline-block;
    @include q(30px);
    border: 3px solid black;
    margin-right: 15px;
    font-size: 19px;
    padding-left: 5px;

    &.checked {
        background-color: black;
        color: white;
    }
}

</style>
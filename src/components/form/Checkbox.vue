<template>
    <div class="checkbox-with-label" @click="update">
        <div class="check-column">
            <div class="checkbox" :class="{ checked: value }">
                <span v-if="value" class="checkmark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="label">
            <slot></slot>
        </div>
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

@import '../../assets/scss/base/colors.scss';

@mixin q($size) {
    width: $size;
    height: $size;
}

.checkbox-with-label {
    display: flex;
    cursor: default;

    .check-column {
        min-width: 45px;
        width: 45px;
        height: 30px;
    }

    .checkbox {    
        display: inline-block;
        @include q(30px);
        border: 3px solid $color-darkblue;
        margin-right: 15px;
        font-size: 19px;

        &.checked {
            background-color: $color-darkblue;
            color: $color-white;
        }

        .checkmark {
            position: relative;
            top: -3px;
        }
    }

    .label {
        padding-top:  5px;
    }
}

section.white .checkmark path {
    stroke: $color-white;
    fill: $color-white;
}

section.darkblue, section.rose, section.darkred, section.lightgrey {
    .checkbox {
        border: 3px solid $color-white;

        &.checked {
            background-color: $color-white;
            color: $color-darkblue;
        }
    }
}

</style>
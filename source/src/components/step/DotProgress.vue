<template>
    <div class="dot-progress">
        <div 
            class="circle" 
            v-for="step in steps" 
            :key="step.key" 
            :class="{ 
                active: activeStep.key === step.key,
                hand: $listeners.click
            }"
            @click="$emit('click', step.key)"
        ></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface IStep {
    key: string,
}

function firstOrDefault<T>(items: T[], predicate: (item: T) => boolean): T | null {
    for (var i = 0; i < items.length; i++) {
        const result: boolean = predicate(items[i]);
        if (result) return items[i];
    }

    return null;
}

export default Vue.extend({
    mounted() {
        console.log(this.$listeners);
    },
    props: {
        steps: {
            type: Array as () => IStep[],
            default: () => []
        },
        active: {
            type: String,
            default: null,
        }
    },
    computed: {
        activeStep(): IStep {
            const match = firstOrDefault(this.steps, item => item.key === this.active);
            return match || this.steps[0];
        }
    }
});
</script>

<style lang="scss" scoped>

$sizes: (
    sm: 16px,
    md: 22px,
    lg: 30px
);

@each $cls, $size in $sizes {

    $spacing: $size / 2;

    .dot-progress.#{$cls} {
        display: flex;

        .circle {
            background-color: transparent;
            border: 2px solid black;
            border-radius: ($size / 2) + 3;
            height: $size;
            width: $size;

            &.active {
                background-color: black;
            }
        }

        .circle + .circle {
            margin-left: $spacing;
        }
    }

    .dot-progress {
        @extend .dot-progress.md;
    }
}

.hand {
    cursor: pointer;
}

</style>

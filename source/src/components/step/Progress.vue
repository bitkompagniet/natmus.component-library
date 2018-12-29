<template>
    <div class="step-progress-container">
        <div class="step-progress-step" v-for="step in steps" :key="step.key" :class="{ active: isActive(step) }">
            <slot :step="step">
                <div class="step-progress-content">
                    <span v-if="step.icon" style="margin-right: 0.5em"><font-awesome-icon :icon="step.icon" /></span>
                    <span>{{ step.title }}</span>
                </div>
                <div class="step-progress-divider" v-if="showTail(step)"></div>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

function getKey(step) {
    if (typeof step == 'string') return step;
    return step.key;
}

export default Vue.extend({
    created() {
        if (this.active == null) {
            this.active = this.steps[0];
        }
    },

    props: {
        active: [Object, String],
        steps: {
            type: Array,
            default: () => [],
        }
    },

    methods: {
        isActive(step): boolean {
            return getKey(step) === getKey(this.active);
        },
        showTail(step): boolean {
            const last = this.steps[this.steps.length - 1];
            return getKey(last) !== getKey(step);
        },
    },
});
</script>

<style lang="scss" scoped>

@import '../../assets/scss/colors.scss';

.step-progress-container {
    display: flex;
}

$passive: $color-beige;
$active: $color-orange;

.step-progress-step {
    // flex-basis: 0;
    display: flex;

    .step-progress-content {
        flex: 1;
        min-width: 12em;
        background-color: $passive;
        border: 4px solid $passive;
        padding: 0.7em;
        text-align: center;
        font-weight: 500;
        color: $color-white;
    }

    &.active .step-progress-content {
        background-color: $active;
        border-color: $active;
    }

    .step-progress-divider {
        min-width: 2em;
        border-bottom: 2px solid $passive;
        height: 53%;
    }

    &.active .step-progress-divider {
        border-color: $active;
    }
}

</style>

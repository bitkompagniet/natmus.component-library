<template>
    <div class="step-progress-container">
        <div class="step-progress-step" v-for="step in steps" :key="step.key" :class="{ active: isActive(step) }">
            <slot :step="step">
                <div class="step-progress-content">
                    <span v-if="step.icon" style="margin-right: 0.5em"><font-awesome-icon :icon="step.icon" /></span>
                    <span>{{ step.title }}</span>
                </div>
                <div class="step-progress-divider align-self-center" v-if="showTail(step)">›</div>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface IStep {
    key: string,
    title: string,
    icon?: string,
}

function getKey(step: IStep | string) {
    if (typeof step == 'string') return step as string;
    return step.key;
}

export default Vue.extend({
    props: {
        active: [Object, String],
        steps: {
            type: Array as () => IStep[],
            default: [],
        }
    },

    methods: {
        isActive(step: IStep | string): boolean {
            return getKey(step) === getKey(this.getActive());
        },
        showTail(step: IStep | string): boolean {
            const last = this.steps[this.steps.length - 1];
            return getKey(last) !== getKey(step);
        },
        getActive(): IStep | string {
            if (this.active == null) {
                return this.steps[0];
            }

            return this.active;
        }
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

@mixin back-and-border($color) {
    background-color: $color;
    border-color: $color;
}

.step-progress-step {
    // flex-basis: 0;
    display: flex;

    .step-progress-content {
        flex: 1;
        min-width: 12em;
        background-color: transparent;
        border: 4px solid $color-white;
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
        margin: 0 0.5em;
        font-weight: normal;
        font-size: 30px;
    }
}

section.white .step-progress-step {

    .step-progress-content {
        border-color: $color-darkblue;
        color: $color-darkblue;
    }

    &.active .step-progress-content {
        @include back-and-border($color-darkblue);
        color: $color-white;
    }

    
}

section.darkblue .step-progress-step.active .step-progress-content {
    @include back-and-border($color-lightgrey);
}

section.darkred .step-progress-step.active .step-progress-content {
    @include back-and-border($color-rose);
}

section.lightgrey .step-progress-step.active .step-progress-content {
    @include back-and-border($color-darkblue);
}

</style>

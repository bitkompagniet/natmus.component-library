<template>
    <div class="step-progress-container">
        <div class="step-progress-step" v-for="step in steps" :key="step.key" :class="{ active: isActive(step) }">
            <slot :step="step">
                <div class="step-progress-content" :class="{ small }">
                    <span v-if="step.icon" style="margin-right: 0.5em"><font-awesome-icon :icon="step.icon" /></span>
                    <span>{{ step.title }}</span>
                </div>
                <div class="step-progress-divider align-self-center" :class="{ small }" v-if="showTail(step)">›</div>
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface IStep {
    key: string | number,
    title: string,
    icon?: string,
}

function getKey(step: IStep | string) {
    if (typeof step == 'string') return step as string;
    return step.key;
}

export default Vue.extend({
    components: {
        'font-awesome-icon': FontAwesomeIcon,
    },

    props: {
        active: [Object, String, Number],
        steps: {
            type: Array as () => IStep[],
            default: [],
        },
        small: {
            type: Boolean,
            default: false,
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

@import '../../assets/scss/base/vars.scss';
@import '../../assets/scss/base/colors.scss';

.step-progress-container {
    display: flex;
    justify-content: center;
}

$passive: $color-beige;
$active: $color-orange;

@mixin back-and-border($color) {
    background-color: $color;
    border-color: $color;
}

.step-progress-step {
    display: flex;
    
    .step-progress-content {
        flex: 1;
        min-width: 12em;
        background-color: transparent;
        border: $button-border-width solid $color-white;
        padding: 0.7em;
        text-align: center;
        font-weight: 700;
        color: $color-white;

        &.small {
            font-size: 0.9em;
            border: none;
            padding: 0.7em;
            min-width: 0;
        }
    }

    &.active .step-progress-content {
        background-color: $active;
        border-color: $active;

        &.small {
            background-color: transparent;
            border-bottom: 2px solid $color-rose;
        }
    }

    .step-progress-divider {
        margin: 0 0.5em;
        font-weight: normal;
        font-size: 30px;

        &.small {
            font-size: 20px;
        }
    }
}

section.white .step-progress-step {

    .step-progress-content {
        border-color: $color-darkblue;
        color: $color-darkblue;
    }

    &.active .step-progress-content:not(.small) {
        @include back-and-border($color-darkblue);
        color: $color-white;
    }
}

section.darkblue .step-progress-step.active .step-progress-content:not(.small) {
    @include back-and-border($color-lightgrey);
}

section.darkred .step-progress-step.active .step-progress-content:not(.small) {
    @include back-and-border($color-rose);
}

section.lightgrey .step-progress-step.active .step-progress-content:not(.small) {
    @include back-and-border($color-darkblue);
}

section.rose .step-progress-step.active .step-progress-content:not(.small) {
    @include back-and-border($color-darkblue);
}

</style>

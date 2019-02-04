<template>

    <div class="n-step-wizard">

        <slot name="wizard-header" :progress="progress"></slot>
        
        <template v-if="keepAlive">
            <div class="sub-component-container" v-for="step in steps" :key="step.key">
                <div v-show="step.key === activeStep.key">
                    <slot :name="step.key" :progress="progress">
                        No template defined for step with key '{{ activeStep.key }}'.
                    </slot>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="sub-component-container">
                <slot :name="activeStep.key">
                    No template defined for step with key '{{ activeStep.key }}'.
                </slot>
            </div>
        </template>

        <slot name="wizard-navigation" :progress="progress">
            <div class="wizard-navigation" style="display: flex" v-if="displayNavigation">
                <div v-if="!isFirst">
                    <slot name="previousButton">
                        <n-button @click="$emit('previous', previousKey)">Previous</n-button>
                    </slot>
                </div>

                <div v-if="!isLast" style="margin-left: auto;">
                    <slot name="continueButton">
                        <n-button @click="$emit('continue', nextKey)">{{ continueText }}</n-button>
                    </slot>
                </div>
                <div v-else-if="displaySubmit" style="margin-left: auto;">
                    <slot name="submitButton">
                        <n-button variant="primary" @click="$emit('submit')">Indsend</n-button>
                    </slot>
                </div>

            </div>
        </slot>

        <slot name="wizard-progress" :progress="progress">
            <div class="wizard-progress" v-if="displayProgress">
                <n-step-progress :steps="steps" :active="active" />
            </div>
        </slot>

    </div>

</template>

<script lang="ts">
import Vue, { Component } from 'vue';

interface IStep {
    key: string,
    title: string,
    icon?: string,
}

interface IProgress {
    activeStep: IStep,
    activeIndex: number,
    isFirst: boolean,
    isLast: boolean,
    nextKey: string | null,
    previousKey: string | null,
}

export default Vue.extend({
    props: {
        active: String,
        steps: {
            type: Array as () => IStep[],
            default: () => [],
        },
        previousText: {
            type: String,
            default: 'Tilbage',
        },
        continueText: {
            type: String,
            default: 'Næste',
        },
        displayNavigation: {
            type: Boolean,
            default: true,
        },
        displaySubmit: {
            type: Boolean,
            default: true,
        },
        displayProgress: {
            type: Boolean,
            default: true,
        },
        keepAlive: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        activeStep(): IStep {
            if (this.active == null) {
                return this.steps[0];
            }

            return this.getStep(this.active) as IStep;
        },
        activeIndex(): number {
            return this.steps.indexOf(this.activeStep);
        },
        isFirst(): boolean {
            return this.activeIndex === 0;
        },
        isLast(): boolean {
            return this.activeIndex === this.steps.length - 1;
        },
        nextKey(): string | null {
            if (!this.isLast) {
                const index = this.getIndex(this.activeStep.key) + 1;
                return this.getStepAtIndex(index).key;
            }

            return null;
        },
        previousKey(): string | null {
            if (!this.isFirst) {
                const index = this.getIndex(this.activeStep.key) - 1;
                return this.getStepAtIndex(index).key;
            }

            return null;
        },
        progress(): IProgress {
            return { 
                activeStep: this.activeStep,
                activeIndex: this.activeIndex,
                isFirst: this.isFirst,
                isLast: this.isLast,
                nextKey: this.nextKey,
                previousKey: this.previousKey
            };
        }
    },
    methods: {
        getStep(key: string): IStep | null {
            const result = this.steps.filter(x => x.key === key);
            if (result.length > 0) return result[0];
            return null;
        },
        getIndex(key: string): number {
            const step = this.getStep(key);

            if (step != null) {
                return this.steps.indexOf(step);
            }

            return -1;
        },
        getStepAtIndex(index: number): IStep {
            return this.steps[index];
        }
    }
});
</script>

<style lang="scss" scoped>

.wizard-progress {
    .step-progress-container {
        justify-content: center;
    }
}

</style>

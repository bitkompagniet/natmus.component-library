<template>
    <div>
        <h2>DotProgress</h2>

        <p>
            The DotProgress is a minimal progress indicator. It conforms to the
            interface (<code>IStep</code>) of <code>StepProgress</code> and <code>Wizard</code>,
            but it will only use the <code>key</code> of the step to track progress.
        </p>

        <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-step-dot-progress
  :steps="steps"
  :active="active"
  class="lg"
  @click="clickHandler"
/&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-step-dot-progress
            :steps="steps"
            :active="active"
            class="lg"
            @click="clickHandler"
        />

        <h3>CSS classes</h3>

        <ul>
            <li><code>sm</code>: indicator consisting of small circles.</li>
            <li><code>md</code>: (default) indicator consisting of medium circles.</li>
            <li><code>lg</code>: large circles (example above).</li>
        </ul>

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                {
                    name: '@click',
                    type: 'function(key: string)',
                    default: 'null',
                    description: 'A click handler for when you want the steps to be clickable.',
                },
                {
                    name: 'steps',
                    type: 'IKeyStep[]',
                    default: '[]',
                    description: 'An array of steps.'
                },
                {
                    name: 'active',
                    type: 'string',
                    default: 'null',
                    description: 'The key of the active step.'
                }
            ]"
        />

        <h3><code>IKeyStep</code> interface</h3>

        <pre>
{
    key: string
}</pre>

        <p>
            Note that an <code>IStep</code> conforms to this interface, so you can share steps between
            <code>Wizard</code>, <code>StepProgress</code> and this component.
        </p>

    </div>
    
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    mounted() {
        let counter = 0;

        setInterval(() => {
            const max = this.steps.length - 1;
            counter = counter === max ? 0 : counter + 1;
            this.active = this.steps[counter].key;
        }, 3000);
    },
    data() {
        return {
            steps: [
                { key: 'first' },
                { key: 'second' },
                { key: 'third' },
            ],
            active: 'first',
        };
    },
    methods: {
        clickHandler(e: any): void {
            window.alert(e);
        }
    }
});
</script>

<template>
  <div>
    <n-section>
      <h2>Font awesome
        <font-awesome-icon icon="thumbs-up"/>
      </h2>
      <p>Font awesome icons are included by default.</p>
    </n-section>

    <n-section>
      <h2>Buttons</h2>

			<p>Standard buttons.</p>

			<h3>Basic usage</h3>

			<p>
				There are four basic button variants: <code>primary</code>,
				<code>secondary</code>, <code>passive</code> and <code>danger</code>.
			</p>

			<pre>
<span v-for="button in buttons" :key="button.key">&lt;n-button variant="{{ button.variant }}"{{ button.disabled ? ' disabled' : '' }}&gt;{{ button.text }}&lt;/n-button&gt;
</span>
</pre>

			<h3>Examples</h3>

      <span v-for="button in buttons" :key="button.key" style="margin-right: 1em;">
        <n-button
          :variant="button.variant"
          :disabled="button.disabled"
          @click="buttonPress(button.variant)"
        >{{ button.text }}</n-button>
      </span>

			<h3>Button with icon</h3>

			<p>
				This is a convenient shortcut for creating a button with an icon.
				It is equivalent to nest a <code>font-awesome-icon</code> element inside
				the button, except it wraps it in a span and puts some reasonable padding
				on it.
			</p>

			<pre>
&lt;n-button variant="primary" icon="thumbs-up"&gt;Approve!&lt;/n-button&gt;
</pre>

			<div style="margin-top: 1.5em">
				<n-button variant="primary" icon="thumbs-up">Approve!</n-button>
			</div>

      <h3>Properties</h3>

			<property-table :items="[
				{
					name: '@click',
					type: 'function',
					default: 'undefined',
					description: 'Bind the click event of the button.',
				},
				{
					name: 'disabled',
					type: 'bool',
					default: 'false',
					description: 'Display as disabled, which is separate from passive style',
				},
				{
					name: 'variant',
					type: 'string',
					default: '&quot;secondary&quot;',
					description: 'The button variant - one of &quot;primary&quot;, &quot;secondary&quot;, &quot;passive&quot; or &quot;danger&quot;.',
				},
			]"/>

    </n-section>

		<n-section>
			<h2>StepProgress</h2>

			<p>
				A component of a wizard or step flow, this is a visual aid showing all steps and
				the current step being shown.
			</p>

			<h3>Basic usage</h3>

			<pre>
&lt;n-step-progress
  :active="two"
  :steps="[{
    key: 'one',
    title: 'First step',
    icon: 'info-circle',
  },
  {
    key: 'two',
    title: 'Second step',
    icon: 'comment',
  },
  {
    key: 'three',
    title: 'Third step',
    icon: 'hand-point-right',
  }]"
/&gt;
</pre>

			<h3>Example</h3>

			<n-step-progress :steps="steps" :active="activeStep" />

			<h3>Properties</h3>

			<property-table :items="[
				{
					name: 'active',
					type: 'IStep | string',
					default: 'null',
					description: 'The active step, as a reference to the actual object or the key as a string.',
				},
				{
					name: 'steps',
					type: 'IStep[]',
					default: '[]',
					description: 'An array describing the step keys, titles and descriptions.'
				},
			]"/>

			<h3><code>IStep</code> interface</h3>

			<p>The key of <code>IStep</code> should be unique. The icon is optional.</p>

			<pre>
{
  key: string,
  title: string,
  icon?: string,
}
</pre>

		</n-section>

		<n-section>
			<demo-wizard />
		</n-section>

		<n-section>
			<demo-dot-progress />
		</n-section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PropertyTable from '../helpers/propertyTable.vue';
import SlotTable from '../helpers/slotTable.vue';
import DemoWizard from '../examples/DemoWizard.vue';
import DemoDotProgress from '../examples/DemoDotProgress.vue';

export default Vue.extend({
	components: {
		'property-table': PropertyTable,
		'slot-table': SlotTable,
		'demo-wizard': DemoWizard,
		'demo-dot-progress': DemoDotProgress,
	},
  data: function() {
    return {
      buttons: [
        { key: 'primary-active', variant: 'primary', text: 'OK' },
				{ key: 'primary-disabled', variant: 'primary', text: 'OK', disabled: true },
        { key: 'secondary-active', variant: 'secondary', text: 'Cancel' },
        { key: 'secondary-disabled', variant: 'secondary', text: 'Cancel', disabled: true },
			],
			activeStep: 'one',
			steps: [
				{
					key: 'one',
					title: 'First step',
					icon: 'info-circle',
				},
				{
					key: 'two',
					title: 'Second step',
					icon: 'comment',
				},
				{
					key: 'three',
					title: 'Third step',
					icon: 'hand-point-right',
				},
			],
    };
  },
  methods: {
    buttonPress(type: string) {
      window.alert(`Clicked button: ${type}`);
		},
  }
});
</script>

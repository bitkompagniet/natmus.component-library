<template>
  <div>
    <n-section>
      <h2>Font awesome
        <font-awesome-icon icon="thumbs-up"/>
      </h2>
      <p>Font awesome icons are included by default.</p>

			<h3>Usage</h3>
<d-helpers-highlight lang="html">
&lt;font-awesome-icon icon="thumbs-up" /&gt;
</d-helpers-highlight>

			<h3>Example</h3>

			<font-awesome-icon icon="thumbs-up" />

    </n-section>

		<n-section>
			<d-examples-logo />
		</n-section>

    <n-section>
      <h2>Buttons</h2>

			<p>Standard buttons.</p>

			<h3>Basic usage</h3>

			<p>
				There are two basic button variants: <code>primary</code> and <code>secondary</code>. The primary
				button color depends on the background section it is placed on.
			</p>

<d-helpers-highlight lang="html">
&lt;n-button variant="primary"&gt;OK&lt;/n-button&gt;
&lt;n-button variant="primary" disabled&gt;OK&lt;/n-button&gt;
&lt;n-button variant="secondary"&gt;Cancel&lt;/n-button&gt;
&lt;n-button variant="secondary" disabled&gt;Cancel&lt;/n-button&gt;
</d-helpers-highlight>

			<h3>Examples</h3>

      <span v-for="button in buttons" :key="button.key" style="margin-right: 1em;">
        <n-button
          :variant="button.variant"
          :disabled="button.disabled"
          @click="buttonPress(button.variant)"
        >{{ button.text }}</n-button>
      </span>

			<h3>Specific colors</h3>

			<p>
				There are also a variant for each of the colors in the theme: 
				<code>darkblue</code>, <code>darkred</code>, <code>rose</code> and <code>lightgrey</code>.
				These can be used when you need more variation. In most cases, however, we recommend
				having one primary button and let all others be secondary.
			</p>

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

			<d-helpers-property-table :items="[
				{
					name: '@click',
					type: '() => void',
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
					name: 'icon',
					type: 'string',
					default: 'null',
					description: 'Name of Font Awesome icon to prefix with.'
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
			<d-examples-alert />
		</n-section>

		<n-section>
			<d-examples-wait />
		</n-section>		

		<n-section>
			<h2>StepProgress</h2>

			<p>
				A component of a wizard or step flow, this is a visual aid showing all steps and
				the current step being shown.
			</p>

			<h3>Basic usage</h3>

<d-helpers-highlight lang="html">
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
</d-helpers-highlight>

			<h3>Example</h3>

			<n-step-progress :steps="steps" :active="activeStep" />

			<h3>Properties</h3>

			<d-helpers-property-table :items="[
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

<d-helpers-highlight lang="typescript">
{
  key: string,
  title: string,
  icon?: string,
}
</d-helpers-highlight>

		</n-section>

		<n-section>
			<d-examples-dot-progress />
		</n-section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
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
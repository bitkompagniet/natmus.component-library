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
<span v-for="button in buttons" :key="button.variant">&lt;n-button variant="{{ button.variant }}"{{ button.disabled ? ' disabled' : '' }}&gt;{{ button.text }}&lt;/n-button&gt;
</span>
</pre>

			<h3>Examples</h3>

      <span v-for="button in buttons" :key="button.variant" style="margin-right: 1em;">
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

      <b-table striped :fields="fields" :items="buttonProperties">
        <template slot="name" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
        <template slot="type" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
				<template slot="default" slot-scope="data">
					<code>{{ data.value }}</code>
				</template>
      </b-table>
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

			<n-step-progress :steps="steps" :active="steps[1]" />

			<h3>Properties</h3>

			<b-table striped :fields="fields" :items="stepProgressProperties">
        <template slot="name" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
        <template slot="type" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
				<template slot="default" slot-scope="data">
					<code>{{ data.value }}</code>
				</template>
      </b-table>

			<h4><code>IStep</code></h4>

			<p>The key of <code>IStep</code> should be unique. The icon is optional.</p>

			<pre>
{
  key: string,
  title: string,
  icon?: string,
}
</pre>

		</n-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      buttons: [
        { variant: 'primary', text: 'OK' },
				{ variant: 'primary', text: 'OK', disabled: true },
        { variant: 'secondary', text: 'Cancel' },
        { variant: 'secondary', text: 'Cancel', disabled: true },
			],
			fields: [
				{ key: 'name', sortable: true },
				{ key: 'type' },
				{ key: 'default' },
				{ key: 'description' }
			],
      buttonProperties: [
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
					default: '"secondary"',
					description: 'The button variant - one of "primary", "secondary", "passive" or "danger".',
				},
			],
			stepProgressProperties: [
				{
					name: 'active',
					type: 'IStep | string',
					default: 'null',
					description: 'The active step, as a reference to the actual object or the key as a string.',
				},
				{
					name: 'steps',
					type: 'Array<IStep>',
					default: '[]',
					description: 'The array of steps.'
				},
			],
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
			]
    };
  },
  methods: {
    buttonPress(type: string) {
      window.alert(`Clicked button: ${type}`);
    }
  }
});
</script>

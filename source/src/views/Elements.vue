<template>
  <div>
    <layout-section>
      <h2>Font awesome
        <font-awesome-icon icon="thumbs-up"/>
      </h2>
      <p>Font awesome icons are included by default.</p>
    </layout-section>

    <layout-section>
      <h2>Buttons</h2>

			<p>Standard buttons.</p>

			<h3>Basic usage</h3>

			<p>
				There are four basic button variants: <code>primary</code>,
				<code>secondary</code>, <code>passive</code> and <code>danger</code>.
			</p>

			<pre>
<span v-for="button in buttons" :key="button.variant">&lt;element-button variant="{{ button.variant }}"{{ button.disabled ? ' disabled' : '' }}&gt;{{ button.text }}&lt;/element-button&gt;
</span>
</pre>

			<h3>Examples</h3>

      <span v-for="button in buttons" :key="button.variant" style="margin-right: 1em;">
        <element-button
          :variant="button.variant"
          :disabled="button.disabled"
          @click="buttonPress(button.variant)"
        >{{ button.text }}</element-button>
      </span>

			<h3>Button with icon</h3>

			<p>
				This is a convenient shortcut for creating a button with an icon.
				It is equivalent to nest a <code>font-awesome-icon</code> element inside
				the button, except it wraps it in a span and puts some reasonable padding
				on it.
			</p>

			<pre>
&lt;element-button variant="primary" icon="thumbs-up"&gt;Approve!&lt;/element-button&gt;
</pre>

			<div style="margin-top: 1.5em">
				<element-button variant="primary" icon="thumbs-up">Approve!</element-button>
			</div>

      <h3>Properties</h3>

      <b-table striped :fields="buttonProperties.fields" :items="buttonProperties.rows">
        <template slot="name" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
        <template slot="type" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
      </b-table>
    </layout-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      buttons: [
        { variant: 'primary', text: 'OK' },
        { variant: 'secondary', text: 'Cancel' },
        { variant: 'passive', text: 'Disabled', disabled: true },
        { variant: 'danger', text: 'Danger!' }
      ],
      buttonProperties: {
        fields: [
          { key: 'name', sortable: true },
          { key: 'type' },
          { key: 'default' },
          { key: 'description' }
        ],
        rows: [
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
        ]
      }
    };
  },
  methods: {
    buttonPress(type: string) {
      window.alert(`Clicked button: ${type}`);
    }
  }
});
</script>

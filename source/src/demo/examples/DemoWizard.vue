<template>
  <div>
    <h2>Wizard</h2>

    <h3>Usage</h3>

    <pre>
&lt;n-step-wizard 
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
  :active="activeStep"
  @continue="activeStep = $event"
  @previous="activeStep = $event"
  @submit="buttonPress('submit')"
&gt;
  &lt;div slot="one" style="text-align: center;"&gt;
    &lt;h4&gt;Steps are defined in slots&lt;/h4&gt;
    &lt;p&gt;Assign the element to the corresponding slot key.&lt;/p&gt;
  &lt;/div&gt;

  &lt;template slot="two"&gt;
    &lt;div style="text-align: center"&gt;
      &lt;h4&gt;Inline&lt;/h4&gt;
      &lt;p&gt;It can be inline templates.&lt;/p&gt;
    &lt;/div&gt;
    
  &lt;/template&gt;

  &lt;step-in-component slot="three" /&gt;
&lt;/n-step-wizard&gt;
</pre>

    <h3>Example</h3>

    <b-row>
      <b-col md="8" offset="2">
        <n-step-wizard
          :steps="steps"
          :active="activeStep"
          @continue="activeStep = $event"
          @previous="activeStep = $event"
          @submit="buttonPress('submit')"
          :keep-alive="true"
        >
          <div slot="one" style="text-align: center;">
            <h4>Steps are defined in slots</h4>
            <p>Assign the element to the corresponding slot key.</p>
          </div>

          <template slot="two">
            <div style="text-align: center">
              <h4>Inline</h4>
              <p>It can be inline templates.</p>
            </div>
          </template>

          <step-in-component slot="three"/>
        </n-step-wizard>
      </b-col>
    </b-row>

    <h3>Properties</h3>

    <property-table
      :items="[
				{
					name: '@continue',
					type: 'function(nextKey)',
					default: 'undefined',
					description: 'Handler when a default navigation triggers a next/continue event.'
				},
				{
					name: '@previous',
					type: 'function(previousKey)',
					default: 'undefined',
					description: 'Handler when a default navigation triggers a previous event.',
				},
				{
					name: 'keepAlive',
					type: 'boolean',
					default: 'false',
					description: 'If true, slots are kept rendered but hidden to retain state on each step.',
				},
				{
					name: 'previousText',
					type: 'string',
					default: '&quot;Tilbage&quot;',
					description: 'The text to display on the &quot;Previous&quot; button.',
				},
				{
					name: 'steps',
					type: 'IStep[]',
					default: '[]',
					description: 'An array describing the step keys, titles and descriptions. Used to order and control the navigation.'
				}
			]"
    />

    <h3>Slots</h3>

    <slot-table
      :items="[
				{ name: '[key]', scope: 'progress: IProgress', description: 'A template corresponding with the step key to be displayed on that step.' },
				{ name: 'wizard-header', scope: 'progress: IProgress', description: 'Rendered as top-most element. No default content.' },
				{ name: 'wizard-navigation', scope: 'progress: IProgress', description: 'Override the default navigation. ' },
				{ name: 'wizard-progress', scope: 'progress: IProgress', description: 'Used to override the default progress.' },
			]"
    />

    <h3>
      <code>IProgress</code>
    </h3>

    <pre>
{
  activeStep: IStep,
  activeIndex: number,
  isFirst: boolean,
  isLast: boolean,
  nextKey: string,
  previousKey: string,
}</pre>

    <h3>
      About
      <code>keepAlive</code> and state in steps
    </h3>

    <p>
      In most cases, it will be preferrable to retain state in the component containing the wizard.
      For instance, when you have a form spanning multiple steps, it will be more practical to
      keep the state on the parent component and send it in one go. In this case, you will not
      be affected by the fact that steps are not kept alive.
    </p>

    <p>
      <code>keepAlive</code> is useful when it is not desirable to move state up.
      An example could be using a sub-component as a step, that manages some view toggles itself.
      <code>keepAlive</code> works by mounting all steps and only
      <code>v-show</code> the current
      one.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StepInComponent from "./StepInComponent.vue";
import PropertyTable from "../helpers/propertyTable.vue";
import SlotTable from "../helpers/slotTable.vue";

export default Vue.extend({
  components: {
    "step-in-component": StepInComponent,
    "property-table": PropertyTable,
    "slot-table": SlotTable
  },
  data: function() {
    return {
      activeStep: "one",
      steps: [
        {
          key: "one",
          title: "First step",
          icon: "info-circle"
        },
        {
          key: "two",
          title: "Second step",
          icon: "comment"
        },
        {
          key: "three",
          title: "Third step",
          icon: "hand-point-right"
        }
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

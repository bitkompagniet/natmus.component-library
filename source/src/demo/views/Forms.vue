<template>
  <div>

    <n-section>
      <h2>Forms</h2>

      <p>
        You can build form fields exactly like in Vue Bootstrap (using <code>b-form-group</code> and <code>b-form-input</code>, etc), but for convenience
        we have created an abstract component for handling fields.
      </p>

      <h3>Basic usage</h3>

      <pre>
&lt;form&gt;
  &lt;n-form-field id="name" label="Navn" type="text" v-model="name" /&gt;
&lt;/form&gt;
</pre>

      <n-slim>
        <form>
          <n-form-field id="name" label="Navn" type="text" v-model="name" />
        </form>
      </n-slim>
      
      <p>This will create an input with label "Navn" bound to the 'name' data field.</p>

      <p>If you omit the label, the group will still be rendered, but will not take up the label space.</p>

      <h3>Validation</h3>

      <p>
        The state and error system from Bootstrap is kept intact, so it is easy to implement validation using a third party lib, such as <code>vuelidate</code>. State should be
        <code>null</code> (no state / black), <code>false</code> (invalid / red) or <code>true</code> (valid / green). When the state is invalid, the error text will be shown
        below the field. State and error properties can easily be controlled by either computed or watched properties.
      </p>

      <pre>
&lt;form&gt;
  &lt;n-form-field id="name" label="Navn" type="text" :state="name.length >= 3" error="Navn skal være minimum 3 tegn." v-model="name" /&gt;
&lt;/form&gt;
</pre>

      <n-slim>
        <form><n-form-field id="name" label="Navn" type="text" :state="name.length >= 3" error="Navn skal være minimum 3 tegn." v-model="name" /></form>
      </n-slim>

      <h3>Design guidelines</h3>

      <ul>
        <li>Keep forms on section themes "white" or "lightgrey".</li>
      </ul>

    </n-section>

    <n-section>
      <h2>Button Select</h2>

      <p>
        The Button Select is a group of toggleable buttons that can act as an alternative to a 
        checkbox group, a radio group and a select box.
      </p>

      <h3>Basic usage</h3>

      <pre>
&lt;n-form-button-select
  :options="[
    { key: 'five', value: '1-5 år' },
    { key: 'ten', value: '6-10 år' },
    { key: 'fifteen', value: '11-15 år' },
  ]"
  v-model="years"
/&gt;</pre>

      <h3>Example</h3>

      <n-slim class="text-center">
        <h4>How many years have you lived there (single)?</h4>

        <n-form-button-select
            :options="[
                { key: 'one', value: '1-5 år' },
                { key: 'two', value: '6-10 år' },
                { key: 'three', value: '11-15 år' },
            ]"
            v-model="years"
        />

        <h4>What colors do you like (multi-select)?</h4>

        <n-form-button-select
            :options="[
                { key: 'red', value: 'Red' },
                { key: 'blue', value: 'Blue' },
                { key: 'green', value: 'Green' },
            ]"
            v-model="colors"
            multi
        />
      </n-slim>

      <h3>Properties</h3>

      <property-table :items="[
        {
          name: 'options',
          type: 'IOption[]',
          default: 'null',
          description: 'The array of options to choose from.',
        },
        {
          name: 'value',
          type: 'string | string[]',
          default: 'null',
          description: 'The currently selected key or an array of keys (for multiselect).',
        },
        {
          name: 'multi',
          type: 'bool',
          default: 'false',
          description: 'Whether selection of multiple items is enabled.'
        }
      ]" />

      <h4><code>IOption</code></h4>

      <pre>
{
  key: string,
  value: string
}</pre>

    </n-section>

    <n-section v-for="theme in ['lightgrey', 'white', 'darkblue', 'rose', 'darkred']" :key="theme" :theme="theme" >
      <n-slim>
        <n-form-title title="Complete example" :subtitle="`A ${theme} form with all input types`"/>

        <b-form>
          <n-form-field 
            id="vej" 
            label="Vej og vejnummer" 
            type="text" 
            placeholder="Vej, vejnummer, etage og dør" 
            description="Vej, vejnummer, etage og dør" 
          />

          <b-row>
            <b-col md="4">
              <n-form-field id="postnummer" label="Postnummer" type="number"/>
            </b-col>
            <b-col md="8">
              <n-form-field id="by" label="By" type="text"/>
            </b-col>
          </b-row>

          <n-form-field id="navn" label="Navn" type="text" v-model="name"/>

          <n-form-field id="witherror" label="Validering minimum 3 tegn" type="text" :state="witherrorState.state" :error="witherrorState.error" v-model="witherror" />

          <h4>Antal år i foreningen</h4>

          <n-form-button-select 
            :options="[
              { key: 'a', value: '1 year' },
              { key: 'b', value: '2 years' },
              { key: 'c', value: '3 years' },
            ]"
            v-model="years"
          />
          
          <n-form-field id="longtext" label="Historie" type="textarea" :rows="8" v-model="long" :description="noCharacters" />

          <div class="d-flex justify-content-end">
            <n-button variant="primary">Submit</n-button>
          </div>

        </b-form>
      </n-slim>
    </n-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import propertyTable from '../helpers/propertyTable.vue';

interface IValidationState {
  state: boolean | null,
  error?: string | null,
}

export default Vue.extend({
  components: {
    'property-table': propertyTable
  },
  data: () => ({
    name: '',
    witherror: '',
    long: '',
    years: null,
    colors: null,
  }),
  computed: {
    witherrorState(): IValidationState {

      if (this.witherror == null || this.witherror === '') {
        return { state: null };
      }

      if (this.witherror == null || this.witherror.length < 3) {
        return { state: false, error: 'Skriv minimum 3 tegn.' };
      }

      return { state: null };
    },
    noCharacters(): string {
      return this.long.length + ' tegn.';
    }
  },
});
</script>

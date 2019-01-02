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

    <n-section theme="lightgrey">
      <n-slim>
        <n-form-title title="Complete example" subtitle="A form with all input types"/>

        <b-form>
          <b-form-group
            id="group-vej"
            label="Vej og vejnummer"
            label-for="vej"
            description="Denne oplysning er personlig, og vil ikke blive delt."
          >
            <b-form-input id="vej" type="text" required placeholder="Indtast vej og vejnummer"></b-form-input>
          </b-form-group>

          <b-row>
            <b-col md="4">
              <n-form-field id="postnummer" label="Postnummer" type="number"/>
            </b-col>
            <b-col md="8">
              <n-form-field id="by" label="By" type="text"/>
            </b-col>
          </b-row>

          <n-form-field id="navn" label="Navn" type="text" v-model="name"/>

          <p v-if="name.length > 0">Det indtastede navn er: {{ name }}</p>
          <p v-else>Der er ikke indtastet et navn endnu.</p>

          <n-form-field id="witherror" label="Validering minimum 3 tegn" type="text" :state="witherrorState.state" :error="witherrorState.error" v-model="witherror" />
          
          <n-form-field id="longtext" label="Historie" type="textarea" :rows="8" v-model="long" :description="noCharacters" />

        </b-form>
      </n-slim>
    </n-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface IValidationState {
  state: boolean | null,
  error?: string | null,
}

export default Vue.extend({
  data: () => ({
    name: '',
    witherror: '',
    long: '',
  }),
  computed: {
    witherrorState(): IValidationState {

      if (this.witherror == null || this.witherror === '') {
        return { state: null };
      }

      if (this.witherror == null || this.witherror.length < 3) {
        return { state: false, error: 'Skriv minimum 3 tegn.' };
      }

      return { state: true };
    },
    noCharacters(): string {
      return this.long.length + ' tegn.';
    }
  },
});
</script>

<template>
  <div>
    <h2>Form field</h2>

    <p>
      You can build form fields exactly like in Vue Bootstrap (using
      <code>b-form-group</code> and
      <code>b-form-input</code>, etc), but for convenience
      we have created an abstract component for handling text input fields.
    </p>

    <h3>Basic usage</h3>

    <pre>
&lt;form&gt;
  &lt;n-form-field id="name" label="Navn" type="text" v-model="name" /&gt;
&lt;/form&gt;
</pre>

    <h3>Example</h3>

    <form>
      <n-form-field id="name" label="Navn" type="text" v-model="unvalidated"/>
    </form>

    <h3>
      Validation with
      <code>vuelidate</code>
    </h3>

    <p>
      <code>vuelidate</code> is baked into the core. To validate a field, you add a
      <code>validations</code>
      object to your component options.
    </p>

<d-helpers-highlight lang="javascript">
import Vue from 'vue';
import { required, minLength } from 'vuelidate/lib/validators';

export default Vue.extend({
    data() {
        return {
            name: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3)
        }
    }
});
</d-helpers-highlight>

    <p>
      Then nested inside your field definition, you can add messages for specific
      error cases:
    </p>

<d-helpers-highlight lang="html">
&lt;form&gt;
  &lt;n-form-field id="name" label="Navn" type="text" v-model="name"&gt;
    &lt;div v-if="!$v.name.required"&gt;This field is required.&lt;/div&gt;
    &lt;div v-else-if="!$v.name.minLength"&gt;Minimum 3 characters.&lt;/div&gt;
  &lt;/n-form-field&gt;
&lt;/form&gt;
</d-helpers-highlight>

    <h3>Example</h3>

    <form>
      <n-form-field id="name2" label="Navn" type="text" v-model="validated">
        <div v-if="!$v.validated.required">This field is required.</div>
        <div v-else-if="!$v.validated.minLength">Minimum 3 characters.</div>
      </n-form-field>
    </form>

    <h3>Properties</h3>

    <d-helpers-property-table :items="[
        {
          name: '@input',
          type: 'function(newValue)',
          default: 'null',
          description: 'The function to call when the input requests a value update. Alternatively, use v-model.',
        },
        {
          name: 'description',
          type: 'string',
          default: 'null',
          description: 'Optional. Show a description below the field',
        },
        {
          name: 'id',
          type: 'string',
          default: 'null',
          description: 'Required. id of field.',
        },
        {
          name: 'label',
          type: 'string',
          default: 'null',
          description: 'Optional. Label to put above field. If omitted, will not show or take up space for label.',
        },
        {
          name: 'placeholder',
          type: 'string',
          default: 'null',
          description: 'Optional. Placeholder description in field shown before any input.',
        },
        {
          name: 'rows',
          type: 'number',
          default: 'null',
          description: 'Optional. When type is &quot;textarea&quot;, this decides the control height in rows.',
        },
        {
          name: 'type',
          type: 'string',
          default: '&quot;text&quot;',
          description: 'The type. One of &quot;text&quot;, &quot;email&quot;, &quot;number&quot;, &quot;textarea&quot;, &quot;password&quot; or &quot;url&quot;.',
        },
        {
          name: 'value',
          type: 'string | number',
          default: 'null',
          description: 'The current value of the input. Alternatively, use v-model.',
        },

      ]"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { minLength, required } from 'vuelidate/lib/validators';

export default Vue.extend({
  data() {
    return {
      unvalidated: '',
      validated: ''
    };
  },
  validations: {
    validated: {
      required,
      minLength: minLength(3)
    }
  }
});
</script>

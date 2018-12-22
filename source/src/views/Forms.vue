<template>
  <div>
    <layout-section>
      <layout-slim>
        <form-title title="Titel" subtitle="Beskrivelse"/>

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
              <form-field id="postnummer" label="Postnummer" type="number"/>
            </b-col>
            <b-col md="8">
              <form-field id="by" label="By" type="text"/>
            </b-col>
          </b-row>

          <form-field id="navn" label="Navn" type="text" v-model="name"/>

          <p v-if="name.length > 0">Det indtastede navn er: {{ name }}</p>
          <p v-else>Der er ikke indtastet et navn endnu.</p>
        </b-form>
      </layout-slim>
    </layout-section>

    <layout-section>
      <h2>Forms</h2>

      <h3>Basic usage</h3>

      <pre>
&lt;form-field id="name" label="Navn" type="text" v-model="name" /&gt;
</pre>
      <p>To insert a form field</p>
    </layout-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    name: '',
    fieldProperties: {
      
    }
  }),
});
</script>

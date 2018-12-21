<template>
  <layout-section>
    <layout-slim>
      <h2>Forms</h2>

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
            <b-form-group id="group-postnummer" label="Postnummer" label-for="postnummer">
              <b-form-input id="postnummer" type="text" required placeholder="XXXX"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="8">
            <b-form-group id="group-by" label="By" label-for="by">
              <b-form-input id="by" type="text" required placeholder="Indtast by"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </layout-slim>
  </layout-section>
</template>

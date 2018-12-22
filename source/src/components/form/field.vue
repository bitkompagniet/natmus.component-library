<template>
  <b-form-group :id="groupId" :label="label" :label-for="id" :description="description">
    <b-form-input 
        :id="id"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        v-bind:value="value"
        v-on:input="$emit('input', $event)"
    ></b-form-input>
  </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue';

const allowedTypes = [
    'text',
    'email',
    'number'
];

export default Vue.extend({
    props: {
        id: {
            type: String,
            required: true
        },
        label: String,
        description: String,
        required: Boolean,
        placeholder: String,
        type: {
            type: String,
            validator: (value: string) => allowedTypes.indexOf(value) !== -1,
        },
        value: [String, Number],
    },
    computed: {
        groupId: function() {
            return `group-${this.id}`;
        },
    }
});
</script>


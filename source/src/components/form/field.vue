<template>
  <b-form-group class="n-style" :id="groupId" :description="description">
    <slot name="label">
        <label :id="groupId + '-label'" :for="id" class="col-form-label n-style">{{ label }}</label>
    </slot>
    <b-form-textarea 
        v-if="type === 'textarea'"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :rows="rows"
        :state="state"
        class="n-style"
        @input="$emit('input', $event)"
    />
    <b-form-input 
        v-else
        :id="id"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        :state="state"
        :value="value"
        class="n-style"
        @input="$emit('input', $event)"
    ></b-form-input>

    <b-form-invalid-feedback :id="errorId" v-if="state === false">
      {{ error }}
    </b-form-invalid-feedback>

  </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue';

const allowedTypes = [
    'text',
    'email',
    'number',
    'textarea',
];

export default Vue.extend({
    props: {
        error: String,
        id: {
            type: String,
            required: true,
        },
        label: String,
        description: String,
        required: Boolean,
        placeholder: String,
        rows: Number,
        state: {
            type: Boolean,
            default: null
        },
        type: {
            type: String,
            validator: (value: string) => allowedTypes.indexOf(value) !== -1,
        },
        value: [String, Number],
    },
    computed: {
        groupId(): string {
            return `group-${this.id}`;
        },
        errorId(): string {
            return `error-${this.id}`;
        },
        getState(): boolean | null {
            if (this.state == null) return null;
            return this.state;
        }
    },
});
</script>


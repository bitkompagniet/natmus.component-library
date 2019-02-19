<template>
  <b-form-group class="n-style" :id="groupId" :description="description">
    <slot name="label">
        <label :id="groupId + '-label'" :for="id" class="col-form-label n-style">{{ label }}</label>
    </slot>
    <textarea 
        v-if="type === 'textarea'"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :rows="rows"
        class="n-style form-control"
        :class="{ 'is-invalid': $slots.default }"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
    />
    <input 
        v-else
        :id="id"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        :value="value"
        class="n-style form-control"
        :class="{ 'is-invalid': $slots.default }"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
    />

    <div :id="errorId" v-if="$slots.default" class="invalid-feedback">
        <slot></slot>
    </div>

  </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue';
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback';

const allowedTypes = [
    'text',
    'email',
    'number',
    'textarea',
    'password',
    'url'
];

export interface IError {
    active: boolean,
    message: string,
}

export default Vue.extend({
    components: {
        'b-form-group': bFormGroup,
        'b-form-textarea': bFormTextarea,
        'b-form-input': bFormInput,
        'b-form-invalid-feedback': bFormInvalidFeedback,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
        label: String,
        description: String,
        required: Boolean,
        placeholder: String,
        rows: Number,
        type: {
            type: String,
            validator: (value: string) => allowedTypes.indexOf(value) !== -1,
            default: 'text'
        },
        value: [String, Number],
    },
    computed: {
        groupId(): string {
            return `group-${this.id}`;
        },
        errorId(): string {
            return `error-${this.id}`;
        }
    },
});
</script>


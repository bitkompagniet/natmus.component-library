<template>
    <div class="d-flex justify-content-between mt-3">
        <n-button 
            v-for="option in optionsWithSelected" 
            :key="option.key" 
            :variant="option.selected ? 'primary' : 'secondary'"
            @click="updateValue(option.key)"
        >
            {{ option.value }}
        </n-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        value: {
            type: [String, Array],
            default: null,
        },
        options: {
            type: Array,
            default: () => [],
        },
        multi: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        optionsWithSelected() {
            return this.options.map(option => ({ key: option.key, value: option.value, selected: this.valueAsArray.includes(option.key) }));
        },
        valueAsArray: function() {
            if (this.value == null) return [];
            if (Array.isArray(this.value)) return this.value;
            return [this.value];
        }
    },
    methods: {
        updateValue: function(key) {

            if (!this.multi) {
                if (key != this.value) {
                    this.$emit('input', key);
                }
            } else {
                let result = this.valueAsArray.filter(x => x != key);
            
                if (!this.valueAsArray.includes(key)) {
                    result = [ ...result, key ];
                }

                this.$emit('input', result);
            }
        }
    }
})
</script>


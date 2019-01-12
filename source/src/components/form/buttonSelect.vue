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

interface IOption {
    key: string,
    value: string,
}

interface IOptionWithSelected extends IOption {
    selected: boolean,
}

export default Vue.extend({
    props: {
        value: {
            type: [String, Array as () => string[]],
            default: null,
        },
        options: {
            type: Array as () => IOption[],
            default: () => [],
        },
        multi: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        optionsWithSelected() : IOptionWithSelected[] {
            return this.options.map(option => ({ key: option.key, value: option.value, selected: this.valueAsArray.includes(option.key) }));
        },
        valueAsArray(): string[] {
            if (this.value == null) return [];
            if (Array.isArray(this.value)) return this.value;
            return [this.value];
        }
    },
    methods: {
        updateValue(key: string) : void {

            if (!this.multi) {
                if (key != this.value) {
                    this.$emit('input', key);
                }
            } else {
                let result : string[] = this.valueAsArray.filter(x => x != key);
            
                if (!this.valueAsArray.includes(key)) {
                    result = [ ...result, key ];
                }

                this.$emit('input', result);
            }
        }
    }
})
</script>


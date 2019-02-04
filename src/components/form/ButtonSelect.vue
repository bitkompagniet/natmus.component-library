<template>
    <div class="button-select d-flex justify-content-between mb-3">
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

<style lang="scss">

@import '../../assets/scss/base/colors.scss';

.button-select {
    .btn.n-style {
        padding: 7px;
    }
}

.darkred, .lightgrey, .darkblue, .rose {
    .button-select .btn.n-style {
        border-color: white;
        color: white;
        
        &.btn-secondary {
            background-color: transparent;
        }
    }
}

@each $name, $color in $themeColors {
    @if $name != white {
        .#{$name} .button-select .btn.n-style.btn-primary {
            $c: darken($color, 10%);
            border-color: $c;
            background-color: $c;
        } 
    }
}


</style>
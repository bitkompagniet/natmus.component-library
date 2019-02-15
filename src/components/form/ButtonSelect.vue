<template>
    <div class="button-select d-flex mb-3">
        <n-button 
            v-for="option in optionsWithSelected" 
            :key="option.key" 
            :variant="option.selected ? 'primary' : 'secondary'"
            @click="updateValue(option.key)"
            class="button-select-item"
        >
            {{ option.value }}
        </n-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '../Button.vue';

type IKey = string | number | boolean;

interface IOption {
    key: IKey,
    value: string,
}

interface IOptionWithSelected extends IOption {
    selected: boolean,
}

export default Vue.extend({
    components: {
        'n-button': Button,
    },
    props: {
        value: {
            type: [Number, Boolean, String, Array as () => string[]],
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
        valueAsArray(): IKey[] {
            if (this.value == null) return [];
            if (Array.isArray(this.value)) return this.value;
            return [this.value];
        }
    },
    methods: {
        updateValue(key: IKey) : void {

            if (!this.multi) {
                if (key != this.value) {
                    this.$emit('input', key);
                }
            } else {
                let result : IKey[] = this.valueAsArray.filter(x => x != key);
            
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

.button-select-item + .button-select-item {
    margin-left: 1em;
}

</style>

<template>
    <div class="base" v-bind:class="[theme, { vfill: verticalFill }]">
        <template v-if="noGrid">
            <slot></slot>
        </template>
        <template v-else>
            <b-container>
                <b-row>
                    <b-col>
                        <slot></slot>
                    </b-col>
                </b-row>
            </b-container>
        </template>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        theme: {
            type: String,
            default: 'white',
        },
        verticalFill: Boolean,
        noGrid: Boolean,
    },
});
</script>

<style lang="scss" scoped>

@import '../../assets/scss/colors.scss';

.base {
    padding: 5em 0;

    h2 {
        font-size: 3em;
    }

    h3 {
        margin-top: 1em;
        margin-bottom: 0.5em;
    }

    pre {
        background-color: rgba($color-white, 0.1);
        padding: 0.5em 0.5em;
        margin: 0;
    }
}

.orange { 
    background-color: $color-orange; 
    color: $color-white; 

    pre {
        color: $color-white;
    }
}

.darkblue { 
    background-color: $color-darkblue; 
    color: $color-white; 

    pre {
        color: $color-white;
    }
}

.rose { background-color: $color-rose; color: $color-white; }

.darkred { 
    background-color: $color-darkred; 
    color: $color-white;

    pre {
        color: $color-white;
    }
}

.beige { background-color: $color-beige; color: $color-white; }

.lightgrey { background-color: $color-lightgrey; color: $color-darkblue; }

.vfill { min-height: 100vh; }

</style>

<template>
    <div class="infobox" :class="variant">

        <svg viewBox="0 0 100 25" style="overflow: visible;">
            <path class="roof" d="M0 25 L68 1 L85 25 L100 25" style="vector-effect: non-scaling-stroke" />
        </svg>

        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        variant: {
            type: String,
            default: 'light',
        },
    },
    computed: {
    }
})
</script>

<style lang="scss" scoped>

@import '../assets/scss/colors.scss';

@mixin border-lrb($stroke: 6px, $color: white) {
    border-left: $stroke solid $color;
    border-right: $stroke solid $color;
    border-bottom: $stroke solid $color;
}

.content {
    margin-top: 0;
    padding: 50px;
}

.infobox {

    &.light {
        .content {
            @include border-lrb($color: white);
        }

        .roof {
            stroke:rgb(255,255,255);
            stroke-width:6;
            fill: none;
            overflow: visible;
        }
    }

    &.dark {
        .content {
            @include border-lrb($color: $color-darkblue);
            background-color: $color-darkblue;
        }

        .roof {
            stroke: $color-darkblue;
            stroke-width:6;
            fill: $color-darkblue;
        }
    }

}

</style>

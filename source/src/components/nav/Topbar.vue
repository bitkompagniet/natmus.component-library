<template>
    
    <div class="topbar-nav n-style" :class="{ simple: !complex, complex }">
        <div>
            <img src="../../assets/images/nationalmuseum_logo_white.png" />
        </div>
        <b-nav>
            <slot></slot>
        </b-nav>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        primary: Boolean,
        links: Array,
        complex: {
            type: Boolean,
            default: false,
        },
    },
    computed: {

    }
});
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.topbar-nav.n-style.simple {
    background-color: $color-darkblue;
    color: white;
    display: flex;
    justify-content: center;
    padding: 30px 0;
    
    ul.nav {
        display: flex;
        flex-direction: column;
        padding: 0 0 0 1.5em;

        li {
            display: flex;
            
            font-weight: bold;
            font-size: 1.6em;
            margin: 0;

            a.nav-link {
                color: $color-white;
                padding: 0;
                font-weight: normal;
            }
        }
    }
}

.topbar-nav.n-style.complex {
    background-color: $color-darkblue;
    color: white;
    display: flex;
    padding: 30px 2em;
    
    ul.nav {
        display: flex;
        flex-direction: row;
        padding: 0 0 0 1.5em;
        

        li.nav-item {
            display: flex;
            margin-bottom: 0;
            font-weight: bold;
            font-size: 1.6em;
            margin: 0;

            a.nav-link {
                color: $color-white;
                margin: auto 0 0 0;
                padding: 0 1em 0 0;
                font-weight: normal;
            }
        }
    }
}

</style>


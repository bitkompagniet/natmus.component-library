<template>
    
    <div id="main-navigation">
        <div class="content">
            <div class="logo"><img src="https://via.placeholder.com/90" /></div>
            <div class="menu">
                <nav class="nav">
                    <slot></slot>
                </nav>
            </div>
        </div>
        
    </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        primary: Boolean,
    },
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors.scss';

#main-navigation {
    background-color: $color-darkblue;
    color: white;
    display: flex;
    flex-direction: row-reverse;
    
    .content {
        flex: 1;
        max-width: 300px;
        display: flex;
        height: 150px;
        align-items: center;

        .nav {
            display: flex;
            flex-direction: column;
            font-weight: bold;
            font-size: 1.3em;

            a {
                color: $color-white;
            }
        }
    }

    .logo {
        flex: 2;
    }

    .menu {
        flex: 3;
    }
}

</style>


<template>
    <nav id="topnav">
        <ul>
            <li>
                <router-link to="/">Front page</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopNavigation',
});
</script>

<style lang="scss" scoped>

#topnav {

    ul {
        margin: 0;
        padding: 0;
        display: flex;

        li {
            list-style-type: none;
            flex-basis: 100px;

            a {
                color: black;
            }
        }
    }
}

</style>

<template>
    
    <div class="topbar-nav n-style">
        <b-container>
            <b-row>
                <b-col>
                    <div class="d-flex" style="height: 130px">
                        <n-logo @click="$emit('logoClick')" white :width="80" />
                        <b-nav>
                            <slot></slot>
                        </b-nav>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
    },
});
</script>

<style lang="scss">
@import '../../assets/scss/base/colors.scss';

.topbar-nav.n-style {
    background-color: $color-darkblue;
    color: $color-white;
    padding: 20px 0;

    ul.nav {
        margin-top: auto;
        margin-bottom: 13px;

        li.nav-item {

            margin-left: 1.5em;

            font-weight: 400;
            font-size: 1.4em;

            a.nav-link {
                color: $color-white;
                padding: 0;

                &.active {
                    color: $color-lightgrey;
                }
            }
        }

        .dropdown-menu {
            border-radius: 0;
            border: 2px solid $color-darkblue;
            font-size: 0.8em;

            .dropdown-item {

                &:hover, &:focus {
                    background-color: $color-white;
                    color: $color-black;
                }

                &.active {
                    background-color: $color-lightgrey;
                    color: $color-white;
                }
            }
        }
    }
}

</style>


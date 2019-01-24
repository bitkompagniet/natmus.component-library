<template>
    <footer class="standard">
        <b-container>
            <slot></slot>
        </b-container>
    </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/base/colors.scss';


.standard {
    background-color: $color-darkblue;
    color: $color-white;

    padding: 4em 0;
}

</style>

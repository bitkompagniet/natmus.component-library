<template>
    <div class="form-title">
        <h2>{{ title }}</h2>
        <h3>{{ subtitle }}</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        title: String,
        subtitle: String,
    },
});
</script>


<style lang="scss" scoped>

@import '../../assets/scss/base/colors.scss';

.form-title {
    // color: $color-darkblue;
    text-align: center;
    margin-bottom: 3em;

    &:not(:first-child) {
        margin-top: 5em;
    }

    h2 {
        font-size: 2em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.5em;
        margin-top: 0;
        font-weight: normal;
    }
}

</style>


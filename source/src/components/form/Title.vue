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
        subtitle: String
    }
})
</script>


<style lang="scss" scoped>

@import '../../assets/scss/colors.scss';

.form-title {
    color: $color-darkblue;
    text-align: center;
    margin-bottom: 3em;

    h2 {
        font-size: 2em;
        font-weight: bold;
    }

    h3 {
        font-size: 1.5em;
        font-weight: bold;
    }
}

</style>


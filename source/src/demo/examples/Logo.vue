<template>
    
    <div>
        <h2>Logo</h2>

        <p>
            The National Museum of Denmark logo as a component.
        </p>

        <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-logo full /&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-logo full />

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                {
                    name: 'white',
                    type: 'bool',
                    default: 'false',
                    description: 'Display as white against a dark background.'
                },
                {
                    name: 'full',
                    type: 'bool',
                    default: 'false',
                    description: 'Display the full logo with name. If false, only the N logo will be displayed.'
                },
            ]"
        />

    </div>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
})
</script>

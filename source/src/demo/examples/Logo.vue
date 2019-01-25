<template>
    
    <div>
        <h2>Logo</h2>

        <p>
            The National Museum of Denmark logo as a component.
        </p>

        <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-logo full width="400" /&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-logo full :width="400" />

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                {
                    name: '@click',
                    type: 'function()',
                    default: 'null',
                    description: 'Event handler for the click event. When bound, cursor is pointer on hover.'
                },
                {
                    name: 'full',
                    type: 'bool',
                    default: 'false',
                    description: 'Display the full logo with name. If false, only the N logo will be displayed.'
                },
                {
                    name: 'white',
                    type: 'bool',
                    default: 'false',
                    description: 'Display as white against a dark background.'
                },
                {
                    name: 'width',
                    type: 'number',
                    default: 'null',
                    description: 'Optional. Set the logo width. Otherwise it will scale to container width.'
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

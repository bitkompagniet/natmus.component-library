<template>
    
    <div>
        <h2>Logo</h2>

        <p>
            The National Museum of Denmark logo as a component.
        </p>

        <h3>Basic usage</h3>

        <pre>
&lt;n-logo full /&gt;</pre>

        <h3>Example</h3>

        <n-logo full />

        <h3>Properties</h3>

        <property-table
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
                }
            ]"
        />

    </div>

</template>

<script lang="ts">
import Vue from 'vue';
import PropertyTable from '../helpers/propertyTable.vue';

export default Vue.extend({
    components: {
        'property-table': PropertyTable
    }
})
</script>

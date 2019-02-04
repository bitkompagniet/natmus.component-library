<template>
    <div>
        <h2>Wait</h2>

        <p>
            A component that will defer displaying its slot content until a truthy
            value is resolved. While waiting, it shows a load spinner.
            Useful for async loading.
        </p>

        <h3>Usage</h3>

<d-helpers-highlight lang="html">
&lt;n-wait :until="loaded" text="Please wait, loading content..."&gt;
    &lt;p class="text-center"&gt;Content load completed.&lt;/p&gt;
&lt;/n-wait&gt;
</d-helpers-highlight>

        <p>
            In the example below, we use this component following component logic (the button triggers the 
            <code>reload</code> method):
        </p>

<d-helpers-highlight lang="javascript">
import Vue from 'vue';

export default Vue.extend({
    mounted() {
        this.reload();
    },
    data() {
        return {
            loaded: false
        }
    },
    methods: {
        reload(): void {
            this.loaded = false;
            
            const self = this;
            setTimeout(() => self.loaded = true, 2000);
        }
    }
});
</d-helpers-highlight>        

        <h3>Example</h3>

        <div><n-button @click="reload" variant="rose">Reload content</n-button></div>

        <n-wait :until="loaded" text="Please wait, loading content..." style="min-height: 97px; margin-top: 2em;">
            <p class="text-center">Content load completed.</p>
        </n-wait>

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                {
                    name: 'text',
                    type: 'string',
                    default: 'null',
                    description: 'A text to be displayed below the load spinner while loading.',
                },
                {
                    name: 'until',
                    type: 'any',
                    default: 'true',
                    description: 'A function or other value that will be resolved to a truthyness value. If this value is true, the slot content is displayed. Otherwise, the spinner is shown.'
                },
            ]"
        />

        <d-helpers-slot-table
            :items="[
                {
                    name: 'waiting',
                    scope: '(none)',
                    description: 'This named slot can be used to override the entire waiting state content, for when you don\'t want the default spinner.',
                },
            ]"
        />
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    mounted() {
        this.reload();
    },
    data() {
        return {
            loaded: false
        }
    },
    methods: {
        reload(): void {
            this.loaded = false;
            
            const self = this;
            setTimeout(() => self.loaded = true, 2000);
        }
    }
});
</script>

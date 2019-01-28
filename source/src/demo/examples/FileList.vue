<template>
    <div>
        <h2>FileList</h2>

        <p>
            Displays a list of files, sorted by extension. Exposes handlers for open and/or delete.
        </p>

        <h3>Usage</h3>

<d-helpers-highlight lang="html">
&lt;n-file-list 
    :files="[
        'thesis.docx',
        'video.mp4',
        'music.mp3',
        'recording.mp4',
    ]"
    @open="openHandler"
    @delete="deleteHandler"
/&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-file-list 
            :files="[
                'thesis.docx',
                'video.mp4',
                'music.mp3',
                'recording.mp4',
            ]"
            @open="log('open: ' + $event)"
            @delete="log('delete: ' + $event)"
        />

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                { 
                    name: '@delete',
                    type: 'function(filename)',
                    default: 'null',
                    description: 'Handler for when a delete request is sent. Delete link is shown on hover when this is bound.',
                },
                { 
                    name: '@open',
                    type: 'function(filename)',
                    default: 'null',
                    description: 'Handler for when a open request is sent. Emphasis on hover when this is bound.',
                },
                { 
                    name: 'files',
                    type: 'string[]',
                    default: '[]',
                    description: 'List of filenames with extensions. If path is prefixed, it will be included in the display.',
                },
            ]"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        log(e: string): void {
            window.alert(e);
        }
    }
});
</script>


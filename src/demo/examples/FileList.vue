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
        { file: { guid: 'id1', fileName: 'thesis.docx' }, key: 'id1', filename: 'thesis.docx' },
        { file: { guid: 'id2', fileName: 'video.mp4' }, key: 'id2', filename: 'video.mp4' },
        { file: { guid: 'id3', fileName: 'music.mp3' }, key: 'id3', filename: 'music.mp3' },
        { file: { guid: 'id4', fileName: 'recording.mp4'}, key: 'id4', filename: 'recording.mp4' },
    ]"
    @open="openHandler"
    @delete="deleteHandler"
/&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <n-file-list 
            :files="[
                { file: { guid: 'id1', fileName: 'thesis.docx' }, key: 'id1', filename: 'thesis.docx' },
                { file: { guid: 'id2', fileName: 'video.mp4' }, key: 'id2', filename: 'video.mp4' },
                { file: { guid: 'id3', fileName: 'music.mp3' }, key: 'id3', filename: 'music.mp3' },
                { file: { guid: 'id4', fileName: 'recording.mp4'}, key: 'id4', filename: 'recording.mp4' },
            ]"
            @open="log('open: ' + $event.fileName)"
            @delete="log('delete: ' + $event.fileName)"
        />

        <h3>Properties</h3>

        <d-helpers-property-table
            :items="[
                { 
                    name: '@delete',
                    type: '(file: any) => void',
                    default: 'null',
                    description: 'Delete request handler. Delete link is shown on hover when this is bound.',
                },
                { 
                    name: '@open',
                    type: '(file: any) => void',
                    default: 'null',
                    description: 'Open request handler. Emphasis on hover when this is bound.',
                },
                { 
                    name: 'files',
                    type: 'IFileDescription[]',
                    default: '[]',
                    description: 'List of files with file object, filename and key.',
                },
            ]"
        />

        <h3>Slots</h3>

        <d-helpers-slot-table
            :items="[
                {
                    name: 'filetext',
                    scope: 'file: IFileDescription & IExtension',
                    description: 'Presentation of the actual filename.',
                },
                {
                    name: 'deletetext',
                    scope: 'file: IFileDescription & IExtension',
                    description: 'Presentation of the remove link.',
                }
            ]"
        />

        <h3><code>IFileDescription</code></h3>

<d-helpers-highlight lang="typescript">
{
    file: any;
    filename: string;
    key: string;
}
</d-helpers-highlight>

        <p>
            The <code>file</code> object can be of any type. It is not used by the
            component, but will be sent to the event handlers.
        </p>

        <h3><code>IExtension</code></h3>

<d-helpers-highlight lang="typescript">
{
    extension: string;
}
</d-helpers-highlight>

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


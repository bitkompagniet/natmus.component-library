<template>
    <div class="quill-wrapper">
        <quill-editor
            :value="value"
            @input="$emit('input', $event)"
            :options="safeOptions"
            ref="myQuillEditor"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css'

import { quillEditor  } from 'vue-quill-editor';

export default Vue.extend({
    components: {
        quillEditor
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        options: {
            type: Object as () => object,
            default: null,
        }
    },
    computed: {
        safeOptions() {
            const defaults : {} = this.defaultOptions;
            const given : {} = this.options || {};

            return { ...defaults, ...given };
        },
        defaultOptions() {
            return {
                modules: {
                    toolbar: [
                        [{ header: 2 }, 'bold', 'italic', 'underline', 'clean'],
                    ]
                },
                theme: 'snow',
                placeholder: 'Skriv her...'
            };
        }
    }
})
</script>

<style lang="scss">

.quill-wrapper {
    $shadow-color: #ddd;
    // border: 1px solid $shadow-color;
    box-shadow: 0px 0px 5px 0px $shadow-color;

    .ql-editor {
        font-size: 16px;

        h2 {
            margin-bottom: 0.5em;
        }

        p {
            margin-bottom: 1em;
        }
    }
}

</style>

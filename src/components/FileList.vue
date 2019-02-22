<template>
    <div class="file-list">
        <div v-for="(list, extension) in sortedFileList" :key="extension" class="sublist" :class="extension">
            <div v-for="file in list" :key="file.key" class="file-row d-flex justify-content-between">
                <div>
                    <span class="filename" :class="{ 'can-open': canOpen }" @click="canOpen && $emit('open', file.file)">
                        <slot name="filetext" :file="file">
                            <span class="attachment-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                            </span>
                            {{ file.filename }}
                        </slot>
                    </span>
                </div>
                <div class="remove-link" @click="$emit('delete', file.file)" v-if="canDelete">
                    <slot name="deletetext" :file="file">Fjern</slot>
                </div>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import { Dictionary } from 'lodash';

interface IFileDescription {
    file: any,
    key: string,
    filename: string,
}

interface IExtension {
    extension: string,
}

export default Vue.extend({
    props: {

        files: {
            type: Array as () => IFileDescription[],
            default: () => []
        },

    },

    computed: {

        sortedFileList(): Dictionary<(IFileDescription & IExtension)[]> {
            const pattern = /(?:\.([^.]+))?$/;

            const unsorted: IFileDescription[] = this.files;

            const wrapped: (IFileDescription & IExtension)[] = _.map(unsorted, file => {
                const matches = pattern.exec(file.filename);
                let extension: string = '';

                if (matches && matches.length > 0) {
                    extension = matches[1];
                }

                return { ...file, extension };
            });

            const sorted = _.sortBy(wrapped, item => item.extension);
            const files: Dictionary<(IFileDescription & IExtension)[]> = _.groupBy(sorted, item => item.extension);
            return files;
        },

        canDelete(): boolean {
            return Boolean(this.$listeners.delete);
        },

        canOpen(): boolean {
            return Boolean(this.$listeners.open);
        },

    }
});
</script>

<style lang="scss">

@import '../assets/scss/base/colors.scss';

.sublist {
    .attachment-icon {
        margin-right: 0.5em;
    }

    .remove-link {
        display: none;
        color: $color-lightgrey;
        font-weight: normal;
        cursor: pointer;
    }

    .file-row {
        &:hover {
            .filename.can-open {
                font-weight: bold;
                cursor: pointer;
            }

            .remove-link {
                display: block;
            }
        }
    }
}

.sublist + .sublist {
    $mp: 0.75em;
    margin-top: $mp;
    padding-top: $mp;
    border-top: 1px solid lighten($color-lightgrey, 40%);
}

</style>

<template>
    <div class="file-list">
        <div v-for="(list, extension) in sortedFileList" :key="extension" class="sublist" :class="extension">
            <div v-for="file in list" :key="file.filename" class="file-row d-flex justify-content-between">
                <div>
                    <span class="attachment-icon"><font-awesome-icon icon="paperclip" />
                    </span><span class="filename" :class="{ 'can-open': canOpen }" @click="canOpen && $emit('open', file.filename)">{{ file.filename }}</span>
                </div>
                <div class="remove-link" @click="$emit('delete', file.filename)" v-if="canDelete">
                    Fjern
                </div>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import { Dictionary } from 'lodash';

interface IFile {
    filename: string,
    extension: string | null,
}

export default Vue.extend({
    props: {
        files: {
            type: Array as () => string[],
            default: () => []
        },
    },
    computed: {
        sortedFileList(): Dictionary<IFile[]> {
            const pattern = /(?:\.([^.]+))?$/;

            const unsorted: string[] = this.files;
            const wrapped: IFile[] = _.map(unsorted, name => {
                const matches = pattern.exec(name);
                let extension = null;

                if (matches && matches.length > 0) {
                    extension = matches[1];
                }

                return { filename: name, extension };
            });

            const sorted = _.sortBy(wrapped, item => item.extension);
            const files: Dictionary<IFile[]> = _.groupBy(sorted, item => item.extension);
            return files;
        },
        canDelete(): boolean {
            return Boolean(this.$listeners.delete);
        },
        canOpen(): boolean {
            return Boolean(this.$listeners.open);
        }
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

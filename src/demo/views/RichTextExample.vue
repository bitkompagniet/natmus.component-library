<template>
    <div>
        <n-section>
            
            <div class="mb-5">
                <n-step-progress
                    :active="'2'"
                    :steps="[
                        { key: '1', title: 'Oplysninger' },
                        { key: '2', title: 'Beretninger' },
                        { key: '3', title: 'Vedhæft' },
                        { key: '4', title: 'Insend', icon: 'paper-plane' },
                    ]"
                />
            </div>

            <n-form-title title="Trin 2: Beretninger" subtitle="Hvordan fik du fat i den bolig du bor i nu?" />
            
            <b-row>
                <b-col :cols="8" :offset="2">
                    <n-form-rich-text v-model="story" />
                    <p class="mt-3 text-muted"><em>{{ statusMessage }}</em></p>

                    <div class="text-center mt-5">
                        <n-button variant="primary">Næste</n-button>
                    </div>
                </b-col>
            </b-row>
            
        </n-section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';

const statusMessages: { [key: string]: string } = {
    'CLEAN': 'Vi gemmer automatisk undervejs, når du begynder at skrive.',
    'DIRTY': 'Gemmer...',
    'SAVED': 'Beretningen er gemt.'
};

export default Vue.extend({
   data()  {
       return {
           story: '',
           status: 'CLEAN'
       };
   },
   watch: {
       story(current: string, before: string): void {
           this.status = 'DIRTY';
           this.debouncedSave();
       }
   },
   computed: {
       statusMessage(): string {
           return statusMessages[this.status];
       }
   },
   methods: {
       debouncedSave: _.debounce(function(this: any) { 
           this.status = 'SAVED';
        }, 1000),
   }
});
</script>

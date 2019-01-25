<template>
    <n-section theme="darkblue">
        <b-row style="min-height: 420px">
            <b-col :cols="4">

                <h2>Din bolig - vores historie</h2>

                <div class="introduction fade-in" :key="'1'" v-if="step === '1'">    
                    <p>I anledningen af BL – Danmarks Almene Boligers 100-års jubilæum i 2019 indsamler Nationalmuseet erindringer fra beboerne i de almene boligområder i Danmark.</p>
                </div>

                <div class="introduction fade-in" :key="'2'" v-if="step === '2'">
                    <p>Vær med til at give kommende generationer mulighed for at få et indblik i, hvordan de almene boliger har skabt rammerne for mange forskellige liv, livshistorier, naboskab, formelle og uformelle fællesskaber, men også skiftende drømme og boligidealer.</p>
                </div>

                <div class="introduction fade-in" :key="'3'" v-if="step === '3'">
                    <p>At bevare erindringer om hverdagslivets forskelligheder er en vigtig fælles opgave. Vi er derfor interesserede i at få et så bredt udsnit af befolkningen som muligt til at deltage, så alle er velkomne til at skrive. Send dit bidrag inden d. xx.xx.2019. Du er med til at skrive fremtidens historie. </p>
                </div>

                <n-step-dot-progress 
                    class="white sm"
                    :active="step"
                    :steps="steps"
                    @click="stepClick"
                />

                <div class="mt-4">
                    <n-button variant="secondary">Læs mere</n-button>
                    <n-button variant="primary" class="ml-4">Deltag nu</n-button>
                </div>
            </b-col>
            <b-col :cols="7" :offset="1" style="min-height: 428px;">
                <div class="image fade-in" :key="'1'" v-if="step === '1'">
                    <img class="full framed" src="../assets/images/summer_party_2.jpg" />
                </div>
                <div class="image fade-in" :key="'2'" v-if="step === '2'">
                    <img class="full framed" src="../assets/images/globe.jpg" />
                </div>
                <div class="image fade-in" :key="'3'" v-if="step === '3'">
                    <img class="full framed" src="../assets/images/apartment_livingroom.jpg" />
                </div>
            </b-col>
        </b-row>
    </n-section>    
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';

interface IKey {
    key: string;
}

interface IData {
    step: string,
    auto: boolean,
    steps: IKey[]
}

export default Vue.extend({
    mounted() {
        setInterval(() => {
            if (this.auto) {
                const steps = this.steps as IKey[];
                const max = parseInt(_.maxBy(steps, item => item.key).key, 10);
                const current = parseInt(this.step as string, 10);

                const next = current === max ? 1 : current + 1;
                this.step = next.toString();
            }
        }, 5000);
    },
    data(): IData {
        return {
            step: '1',
            auto: true,
            steps: [
                { key: '1' },
                { key: '2' },
                { key: '3' },
            ]
        };
    },
    methods: {
        stepClick(key: string): void {
            this.auto = false;
            this.step = key;
        }
    }
})
</script>

<style lang="scss" scoped>

.introduction {
    min-height: 170px;
}

</style>

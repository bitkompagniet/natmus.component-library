<template>
    <n-section theme="darkblue">
        <b-row>
            <b-col :cols="5">
                <div class="introduction as fade-in" :key="'1'" v-if="step === '1'">
                    <h2>Bidrag til historien</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vel ipsam, quisquam officiis quibusdam ipsa explicabo maiores dolorum commodi qui sunt in suscipit sint cum assumenda esse labore unde iusto?</p>
                </div>

                <div class="introduction de fade-in" :key="'2'" v-if="step === '2'">
                    <h2>Opret en bruger</h2>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta in quod hic labore facere qui, maiores officiis ex nihil error sit nisi itaque fugiat mollitia corporis unde eum dicta.</p>
                </div>

                <div class="introduction er fade-in" :key="'3'" v-if="step === '3'">
                    <h2>Skriv din historie</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, rerum suscipit temporibus perspiciatis beatae esse illum pariatur atque, assumenda animi voluptas voluptatibus perferendis dignissimos? Minus voluptates a numquam fugit voluptas?</p>
                </div>

                <n-step-dot-progress 
                    class="white"
                    :active="step"
                    :steps="steps"
                    @click="stepClick"
                />
            </b-col>
            <b-col :cols="6" :offset="1">
                <div class="image">
                    <img class="full framed" src="../assets/images/globe.jpg" />
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <n-button variant="secondary">Læs mere</n-button>
                <n-button variant="primary" class="ml-5">Deltag nu</n-button>
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
    margin-bottom: 5em;
    min-height: 185px;
}

</style>

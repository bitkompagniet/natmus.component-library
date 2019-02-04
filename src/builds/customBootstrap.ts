import { VueConstructor } from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../assets/scss/app.scss';

const plugin = {
    install(vue: VueConstructor): void {
        console.log('customBootstrap.ts');
        console.log(BootstrapVue);
        vue.use(BootstrapVue);
    },
};

export default plugin;

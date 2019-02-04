import { VueConstructor } from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../assets/scss/app.scss';

const plugin = {
    install(vue: VueConstructor): void {
        console.log('Start Bootstrap');
        vue.use(BootstrapVue);
        console.log('End Bootstrap');
    },
};

export default plugin;

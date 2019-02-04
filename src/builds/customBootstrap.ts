import { VueConstructor } from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../assets/scss/app.scss';

const plugin = {
    install(vue: VueConstructor): void {
        const x = vue as any;
        console.log(x.options.components);
        vue.use(BootstrapVue);
        console.log(x.options.components);
        const y = window as any;
        y.test = x;
    },
};

export default plugin;

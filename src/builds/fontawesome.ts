import { VueConstructor } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const plugin = {
    install(vue: VueConstructor): void {
        library.add(fas);
        vue.component('font-awesome-icon', FontAwesomeIcon);
    },
};

export default plugin;

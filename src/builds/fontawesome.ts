import { VueConstructor } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const plugin = {
    install(vue: VueConstructor): void {
        library.add(fas);
    },
};

export default plugin;

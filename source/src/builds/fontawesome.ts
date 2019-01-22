import { VueConstructor } from 'vue';

const plugin = {
    install(vue: VueConstructor): void {
        const library = require('@fortawesome/fontawesome-svg-core').library;
        const fas = require('@fortawesome/free-solid-svg-icons').fas;
        const FontAwesomeIcon = require('@fortawesome/vue-fontawesome').FontAwesomeIcon;
        library.add(fas);
        vue.component('font-awesome-icon', FontAwesomeIcon);
    },
};

export default plugin;

import Vue from 'vue';
import { ValidationRule } from 'vuelidate/lib/validators';

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
  }
}

type VRFunc = () => ValidationRule

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    validations?: {
      [key: string]: {
        [key: string]: ValidationRule | VRFunc
      }
    }
  }
}
import Vue from 'vue';
import { ValidationRule } from 'vuelidate/lib/validators';
import { RuleDecl, DynamicDecl } from 'vue/types/options';

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
    validations?: RuleDecl | DynamicDecl | undefined
  }
}
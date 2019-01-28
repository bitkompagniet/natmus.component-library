<template>
    <div class="awaited-content">
        <div class="waiting" v-if="!until">
          <div class="lds-dual-ring"></div>
          <div class="wait-text" v-if="text">{{ text }}</div>
        </div>

        <slot v-if="until"></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';

export default Vue.extend({
    props: {
      until: {
        type: [Boolean, Function],
        default: true
      },
      text: {
        type: String
      }
    },
    computed: {
      isComplete(): boolean {
        if (_.isFunction(this.until)) {
          return this.until();
        }

        return Boolean(this.until);
      }
    }
});
</script>

<style lang="scss" scoped>

@import '../assets/scss/base/colors.scss';

.waiting {
  text-align: center;
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid $color-darkblue;
  border-color: $color-darkblue transparent $color-darkblue transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

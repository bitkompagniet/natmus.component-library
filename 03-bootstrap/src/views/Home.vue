<template>
  <div class="home">
    <section-header>Wuut</section-header>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SectionHeader from '@/components/exported/text/SectionHeader.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    SectionHeader,
  },
};
</script>

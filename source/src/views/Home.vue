<template>
  <div class="home">
    <section-header>Wuut</section-header>
    <p>This is a text.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionHeader from '@/components/exported/text/SectionHeader.vue';

export default {
  name: 'home',
  components: {
    SectionHeader,
  },
};
</script>

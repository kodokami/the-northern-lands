<template>
  <Banner v-bind:animated="false"/>
  <div>
    Map goes here
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue';

  export default {
    name: 'MapView',
    components: {
      Banner
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped>

</style>

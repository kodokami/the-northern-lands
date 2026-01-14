<template>
  <h1 class="link" @click="switchToMain">Ziemie Północne</h1>
  <div>
    Map goes here
  </div>
</template>

<script>
  import router from '@/router/index.js';

  export default {
    name: 'MapView',
    components: {},
    data() {
      return {};
    },
    methods: {
      switchToMain() {
        router.push('/');
      }
    }
  };
</script>

<style scoped>
  .link {
    cursor: pointer;
  }
</style>

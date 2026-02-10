<template>
  <Banner style="margin-top: 10%;"/>
  <div class="menu">
    <div class="link" @click="switchToMap">Mapa</div>
    <div class="link" @click="switchToGlossary">Glosariusz</div>
    <div class="link" @click="switchToResources">Materiały</div>   
  </div>
</template>

<script>
  import router from '@/router/index.js';
  import Banner from '@/components/Banner.vue';

  export default {
    name: 'MainView',
    components: {
      Banner
    },
    data() {
      return {};
    },
    methods: {
      switchToMap() {
        router.push('/map');
      },
      switchToGlossary() {
        alert('To be implemented');
      },
      switchToResources() {
        alert('To be implemented');
      }
    }
  };
</script>

<style scoped>
  .menu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .link {
    cursor: pointer;
  }
  .link:hover {
    color: darkgray;
  }
</style>
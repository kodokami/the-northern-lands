<template>
  <Banner ref="banner"/>
  <div class="buttons-container" :class="{'fade-in': !fadeOut, 'fade-out': fadeOut}">
    <ScrollButton @click="switchPath('/map')">Mapa Świata</ScrollButton>
    <ScrollButton @click="" disabled>Glosariusz</ScrollButton>
    <ScrollButton @click="" disabled>Materiały</ScrollButton>   
  </div>
</template>

<script>
  import router from '@/router/index.js';
  import Banner from '@/components/Banner.vue';
  import ScrollButton from '@/components/ScrollButton.vue';

  export default {
    name: 'MainView',
    components: {
      Banner,
      ScrollButton
    },
    data() {
      return {
        fadeOut: false
      };
    },
    methods: {
      switchPath(path) {
        this.fadeOut = true;
        this.$refs.banner.hideAndCall(
          () => { router.push(path); }
        );
      }
    }
  };
</script>

<style scoped>
  .buttons-container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 1200px;
  }
  @media (width <= 1200px) {
    .buttons-container {
      width: 100vw;
    }
  }
  @media (width <= 900px) {
    .buttons-container {
      flex-direction: column;
    }
  }
</style>
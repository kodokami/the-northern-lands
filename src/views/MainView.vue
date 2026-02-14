<template>
  <Banner ref="banner"/>
  <div class="buttons-container" :class="{'fade-in': !fadeOutButtons, 'fade-out': fadeOutButtons}">
    <ScrollButton @click="switchToMap">Mapa Świata</ScrollButton>
    <ScrollButton @click="switchToGlossary" disabled>Glosariusz</ScrollButton>
    <ScrollButton @click="switchToResources" disabled>Materiały</ScrollButton>   
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
        fadeOutButtons: false
      };
    },
    methods: {
      switchToMap() {
        this.fadeOutView();
        this.$refs.banner.hideAndCall(
          () => { router.push('/map'); }
        );
      },
      switchToGlossary() {
        return;
      },
      switchToResources() {
        return;
      },
      fadeOutView() {
        this.fadeOutButtons = true;
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
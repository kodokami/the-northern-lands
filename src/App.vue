<template>
  <div class="shadow-layer">
    <div class="background-img"/>
    <div class="clouds"/>
  </div>
  <RouterView/>
</template>

<script>
  import router from '@/router/index.js';

  export default {
    name: 'App',
    beforeCreate() {
      document.title = 'Ziemie Północne';
    }
  };
</script>

<style scoped>
  .shadow-layer {
    position: absolute;
    top: 0;
    left: 0;
    opacity: .6;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
  .background-img {
    background-image: url("@/assets/background/map.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 400px black inset;
    width: 100%;
    height: 100%;
  }
  .clouds {
    position: absolute;
    top: -10%;
    left: -10%;
    transform: translate3d(0, 0, 0) rotate(.1deg);
    opacity: .8;
    width: 120%;
    height: 120%;
    background-image: url("@/assets/background/clouds.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: clouds 60s infinite alternate;
  }
  @keyframes clouds {
    25% {
      transform: translate3d(100px, 0, 0) rotate(.1deg)
    }
    50% {
      transform: translate3d(75px, -25px, 0) rotate(.1deg)
    }
    75% {
      transform: translate3d(45px, 30px, 0) rotate(.1deg)
    }
    100% {
      transform: translate3d(25px, -15px, 0) rotate(.1deg)
    }
  }
</style>

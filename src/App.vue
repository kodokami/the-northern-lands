<template>
  <div class="shadow-layer">
    <div class="background-img unselectable"/>
    <div class="clouds"/>
  </div>
  <div class="view-container">
    <RouterView/>
  </div>
</template>

<script>
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
    width: 100vw;
    height: 100vh;
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
    top: -30%;
    left: -30%;
    transform: translate3d(0, 0, 0) rotate(.1deg);
    opacity: .8;
    width: 140%;
    height: 140%;
    background-image: url("@/assets/background/clouds.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: clouds 60s infinite linear alternate;
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

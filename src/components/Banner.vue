<template>
  <img class="banner" :class="{'dropdown': animated, 'slide-back': hideBanner, 'inactive': isMainpage}"
       @click="switchToMain" src="@/assets/banner.png" alt="Ziemie Północne">
</template>

<script>
  import router from '@/router/index.js';
    
  export default {
    name: 'SiteBanner',
    components: {},
    props: {
      animated: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        hideBanner: false
      };
    },
    computed: {
      isMainpage() {
        return this.$route.name === 'main';
      }
    },
    methods: {
      switchToMain() {
        if (!this.isMainpage) {
          if (!this.animated) {
            // don't animate banner on exit
            router.push('/');
            return;
          }

          // animate banner on exit
          this.hideBanner = true;
          setTimeout(
            () => {
              this.hideBanner = false;
              router.push('/');
            }, 1100
          );
        }
      }
    }
  };
</script>

<style scoped>
  .banner {
    cursor: pointer;
  }
  .inactive {
    cursor: default !important;
  }
  .dropdown {
    animation: dropdown 1.2s ease-out;
  }
  @keyframes dropdown {
    0% {
      transform: translateY(-30vh)
    }
    100% {
      transform: translateY(0)
    }
  }
  .slide-back {
    animation: slide-back 1.2s ease-in;
  }
  @keyframes slide-back {
    0% {
      transform: translateY(0)
    }
    100% {
      transform: translateY(-30vh)
    }
  }
</style>

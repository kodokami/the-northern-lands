<template>
  <div class="main-container" :class="{'ribbon-dropdown': animated, 'slide-back': hideBanner}">
    <img class="ribbon" :class="{'inactive': isMainpage}" @click="switchToMain"
         src="@/assets/banners/ribbon.png" alt="Ziemie Północne"
         >
    <div class="banners-container" v-if="!noBanners">
      <img class="banner" :class="{'banner-dropdown': animated, 'slide-back': hideBanner}" style="margin-top: 20px;"
           src="@/assets/banners/ksiestwo-salacji.png" alt="Księstwo Salacji"
           >
      <img class="banner" :class="{'banner-dropdown': animated, 'slide-back': hideBanner}" style="margin-top: 0px;"
           src="@/assets/banners/ksiestwo-teganskie.png" alt="Ziemie Cedryka"
           >
      <img class="banner" :class="{'banner-dropdown': animated, 'slide-back': hideBanner}" style="margin-top: 20px;"
           src="@/assets/banners/hrabstwo-hervieux.png" alt="Hrabstwo Hervieux"
           >
    </div>
  </div>
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
      },
      noBanners: {
        type: Boolean,
        default: false
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
            // don't animate banners on exit
            router.push('/');
            return;
          }

          // animate banners on exit
          this.hideAndCall(
            () => { router.push('/'); }
          );
        }
      },
      hideAndCall(func) {
        this.hideBanner = true;
        setTimeout(
          () => {
            this.hideBanner = false;
            func();
          }, 1100
        );
      }
    }
  };
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 910px;
/*     border: 1px solid red; */
  }
  .banners-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 66%;
    margin-top: -80px;
    padding-right: 22px;
    overflow: hidden;
/*     border: 1px solid green; */
  }
  .ribbon {
    height: 180px;
    width: 910px;
    cursor: pointer;
    z-index: 10;
  }
  .banner {
    max-height: 484px;
    max-width: 300px;
    height: 242px;
    width: 150px;
  }
  .inactive {
    cursor: default !important;
  }
  .ribbon-dropdown {
    animation: ribbon-dropdown 1.2s ease-out;
  }
  @keyframes ribbon-dropdown {
    0% {
      transform: translateY(-30vh)
    }
    100% {
      transform: translateY(0)
    }
  }
  .banner-dropdown {
    animation: banner-dropdown 1.4s ease;
  }
  @keyframes banner-dropdown {
    0% {
      transform: translateY(-300px)
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

<template>
  <div class="scroll-button" :class="{'active-button': !disabled, 'disabled': disabled}">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ScrollButton',
    components: {},
    props: {
      disabled: Boolean
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style scoped>
  .scroll-button {
    background-image: url("@/assets/buttons/landscape-scroll.png");
    background-size: 300px 120px;
    background-repeat: no-repeat;
    height: 120px;
    width: 300px;
    margin-right: 6px;
    text-align: center;
    align-content: flex-start;
    line-height: 114px;
    font-family: JackPirate;
    font-size: xx-large;
    letter-spacing: 3px;
    color: black;
    text-shadow: none;
  }
  .active-button:hover {
    cursor: pointer;
    filter: brightness(1.1);
    text-shadow: 1px 1px 4px silver;
  }
  .disabled {
    cursor: default !important;
    filter: brightness(.9) saturate(0);
  }
</style>

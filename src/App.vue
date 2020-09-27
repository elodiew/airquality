<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
    <div class="container" id="apps">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const HeaderW_layout = "HeaderW";

export default {
  name: "App",
  data() {
    return {
      image: "https://zupimages.net/up/20/39/y1ak.jpg",
    };
  },
  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || HeaderW_layout) + "-layout";
    },
  },
};
</script>

<style>
</style>

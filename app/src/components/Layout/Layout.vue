<template lang="html">
  <div class="layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
// Main SCSS goes here
@import "~css/utils";
@import "~bulma/bulma";

// Bulma fixes for app
html {
  overflow: hidden;
  background-color: $white;
}

// Font Awesome
@import "~font-awesome/css/font-awesome.css";

// Layout
.layout {
  p {
    text-align: justify;
    text-justify: inter-word;
  }
}

</style>

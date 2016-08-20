<template lang="html">
  <div class="layout">
    <side-bar>
      In the side bar...
    </side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './SideBar'

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: { SideBar }
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
  @include fullSize;
  display: flex;

  p {
    text-align: justify;
    text-justify: inter-word;
  }
}

</style>

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

// Palette
@import "~css/palette";
$black: palette(Black);
$grey-darker: palette(Grey, 800);
$grey-dark: palette(Grey, 700);
$grey: palette(Grey);
$grey-light: palette(Grey, 400);
$grey-lighter: palette(Grey, 300);
$white: palette(White);
$blue: palette(Light Blue);
$green: palette(Light Green);
$orange: palette(Deep Orange);
$purple: palette(Deep Purple);
$red: palette(Red);
$turquoise: palette(Teal);
$yellow: palette(Amber);

// Bulma
$primary: palette(Light Green);
$info: palette(Pink);
$success: palette(Green);
$text: palette(Black, Text);

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
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  padding: 40px 20px;

  section {
    height: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;

    & > header, & > footer { flex-shrink: 0; }
    & > article { flex-grow: 1 }
  }
}

</style>

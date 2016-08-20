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
@import "~css/palette";

.layout {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  padding: 40px 20px;

  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  letter-spacing: 1px;
  color: palette(Black, Text);

  a {
    text-decoration: none;
    color: palette(Light Green);
    font-weight: 400;
  }

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

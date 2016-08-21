<template lang="html">
  <router-link to="/home">
    <h1>Garden</h1>
    <h2>An Electron Vue Starter&nbsp;Kit</h2>
  </router-link>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="scss" scoped>
@import "~css/utils";

a {
  @include fullSize;
  @include centerContent;
  flex-direction: column;
  text-align: center;

  h1, h2 {
    margin: 0;
    line-height: 100%;
  }

  h1 {
    text-transform: uppercase;
    color: palette(Light Green);
    letter-spacing: 0.3em;
    font-weight: 200;
    font-size: 64px;
  }

  h2 {
    letter-spacing: 0.8em;
    color: palette(Black, Secondary Text);
    font-weight: 300;
    font-size: 14px;
  }
}
</style>

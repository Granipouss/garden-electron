<template lang="html">
  <section>
    <router-link to="/home">
      <h1>Garden</h1>
      <h2>An Electron Vue Starter&nbsp;Kit</h2>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import "~css/palette";

section {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

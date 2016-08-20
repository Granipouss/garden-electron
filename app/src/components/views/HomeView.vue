<template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title">Garden</h1>
      <h2 class="subtitle">An Electron Vue Starter Kit</h2>
      <p class="content">
        Garden is meant simple and complete starter kit to create neat and good
        looking desktop applications, using Vue, Bulma and Electron.
      </p>

      <div class="columns content">
        <div class="column">
          <h4 class="title is-4">Vue.js</h4>
          <p>
            Vue.js (pronounced /vjuː/, like view) is a library for building
            interactive web interfaces. The goal of Vue.js is to provide the
            benefits of reactive data binding and composable view components
            with an API that is as simple as possible.
          </p>
          <a href="https://vuejs.org/" class="button is-link" target="_blank">Learn More</a>
        </div>
        <div class="column">
          <h4 class="title is-4">Electron-Vue</h4>
          <p>
            The aim of this project is to remove the need to setup electron
            apps using vue. Since vue can take advantage of module loaders
            like webpack, getting everything to play nicely can be a little
            tricky.
          </p>
          <a href="https://github.com/SimulatedGREG/electron-vue" class="button is-link" target="_blank">Learn More</a>
        </div>
        <div class="column">
          <h4 class="title is-4">Bulma</h4>
          <p>
            A modern CSS framework based on Flexbox. Bulma is a CSS framework.
            As such, the sole output is a single CSS file.
          </p>
          <a href="http://bulma.io/" class="button is-link" target="_blank">Learn More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.columns {
  margin-top: 3em;

  h4 { text-align: center; }
}
</style>

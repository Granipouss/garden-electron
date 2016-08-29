<template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title">Foo</h1>
      <h2 class="subtitle">An Electron Vue Starter Kit</h2>
      <p class="content">
        Garden is meant simple and complete starter kit to create neat and good
        looking desktop applications, using Vue, Bulma and Electron.
      </p>
    </div>
  </section>
</template>

<script>
import Dog from 'models/Dog'

export default {
  name: 'Home',
  routerOptions: {
    layout: 'default',
    params: '/:foo?'
  },
  mounted () {
    console.log(this.$route)
    Dog.find({}, docs => console.log(docs))
  }
}
</script>

<template lang="html">
  <div class="layout">
    <side-bar>
      <bulma-menu
        :items="[
          { label: 'Home', icon: 'home', link: '/home' },

          { label: 'Administration', kind: 'category' },
          { label: 'Manage Your Team', submenu: [
            { label: 'Members', link: '/foo' },
            { label: 'Plugins', link: '/bar' },
            { label: 'Add a member', link: '/bar' }
          ] },
          { label: 'Invitations', submenu: [
            { label: 'Foo', link: '/foo' },
            { label: 'Bar', link: '/bar' }
          ] },
          { label: 'Authentication', link: '/bar' },

          { kind: 'delimiter' },

          { label: 'Transactions', kind: 'category' },
          { label: 'Payments', link: '/bar' },
          { label: 'Transfers', link: '/bar' },
          { label: 'Balance', link: '/bar' }
        ]"
      ></bulma-menu>
    </side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './SideBar'
import BulmaMenu from 'components/Menu/Menu'

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: { SideBar, BulmaMenu }
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

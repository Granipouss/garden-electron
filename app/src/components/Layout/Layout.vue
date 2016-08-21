<template lang="html">
  <div class="layout">
    <side-bar>
      <bulma-menu
        :items="[
          { label: 'Garden', kind: 'category' },
          { label: 'Home', icon: 'home', link: '/home' },
          { label: 'Title', link: '/' },

          { kind: 'delimiter' },

          { label: 'General', kind: 'category' },
          { label: 'Dashboard', link: '/home' },
          { label: 'Customers', link: '/home' },

          { label: 'Administration', kind: 'category' },
          { label: 'Manage Your Team', submenu: [
            { label: 'Members', link: '/home' },
            { label: 'Plugins', link: '/home' },
            { label: 'Add a member', link: '/home' }
          ] },
          { label: 'Invitations', link: '/home' },
          { label: 'Authentication', link: '/home' },

          { label: 'Transactions', kind: 'category' },
          { label: 'Payments', link: '/home' },
          { label: 'Transfers', link: '/home' },
          { label: 'Balance', link: '/home' }
        ]"
      >
        <!-- <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Customers</a></li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list">
          <li><a href="#">Team Settings</a></li>
          <li>
            <a class="is-active" href="#">Manage Your Team</a>
            <ul>
              <li><a href="#">Members</a></li>
              <li><a href="#">Plugins</a></li>
              <li><a href="#">Add a member</a></li>
            </ul>
          </li>
          <li><a href="#">Invitations</a></li>
          <li><a href="#">Authentication</a></li>
        </ul>
        <p class="menu-label">
          Transactions
        </p>
        <ul class="menu-list">
          <li><a href="#">Payments</a></li>
          <li><a href="#">Transfers</a></li>
          <li><a href="#">Balance</a></li>
        </ul> -->
      </bulma-menu>
    </side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './SideBar'
import BulmaMenu from 'components/Menu'

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

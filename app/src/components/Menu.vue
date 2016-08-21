<template lang="html">
  <div class="menu">
    <template v-for="item in items">
      <hr v-if="item.kind === 'delimiter'">
      <p class="menu-label" v-if="item.kind === 'category'">
        <span class="icon" v-if="item.icon">
          <i class="fa" :class="'fa-' + item.icon"></i>
        </span>
        <span>{{ item.label }}</span>
      </p>
      <template v-if="!item.kind">
        <template v-if="item.submenu">
          <a class="menu-item">{{ item.label }}</a>
          <ul class="sub-menu">
            <li v-for="sub in item.submenu">
              <router-link :to="sub.link" class="menu-item expendable" @click="toggle">
                <span class="icon" v-if="sub.icon">
                  <i class="fa" :class="'fa-' + sub.icon"></i>
                </span>
                <span>{{ sub.label }}</span>
              </router-link>
            </li>
          </ul>
        </template>
        <router-link :to="item.link" class="menu-item">
          <span class="icon" v-if="item.icon">
            <i class="fa" :class="'fa-' + item.icon"></i>
          </span>
          <span>{{ item.label }}</span>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    toggle () {

    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "~css/utils";

.menu {
  margin: 10px 0;

  .menu-label { padding: 0 8px; }

  .menu-item {
    // border-radius: $radius-small;
    color: $text;
    display: block;
    padding: 5px 10px;

    &:hover {
      background-color: $background;
      color: $link;
    }
    // Modifiers
    &.is-active {
      background-color: $link;
      color: $link-invert;
    }

    * { cursor: pointer; }

    $icon-size: 20px;
    .icon {
      font-size: 100%;
      height: 100%;
      line-height: $icon-size;
      width: $icon-size;
    }
  }

  .sub-menu {
    border-left: 1px solid $border;
    margin: 2px 10px;
    padding-left: 10px;
  }

  hr {
    border-top-color: palette(Black, Delimiters);
    margin: 10px 0;
  }
}
</style>

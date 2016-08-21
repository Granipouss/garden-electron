<template lang="html">
  <div class="menu">
    <template v-for="(item, i) in items">
      <hr v-if="item.kind === 'delimiter'">
      <p class="menu-label" v-if="item.kind === 'category'">
        <span class="icon" v-if="item.icon">
          <i class="fa" :class="'fa-' + item.icon"></i>
        </span>
        <span>{{ item.label }}</span>
      </p>
      <template v-if="!item.kind">
        <template v-if="item.submenu">
          <a class="menu-item" href="#" @click.prevent="toggle(i)" :class="{ 'collapsed': expandIndex !== i }">
            <span class="icon" v-if="item.icon">
              <i class="fa" :class="'fa-' + item.icon"></i>
            </span>
            <span>{{ item.label }}</span>
            <span class="icon is-small is-angle">
              <i class="fa fa-angle-right"></i>
            </span>
          </a>
          <ul class="sub-menu" :data-index="i" :style="{ height: (expandIndex === i ? subHeights[i] : 0) + 'px' }">
            <li v-for="sub in item.submenu">
              <bulma-menu-item :item="sub"></bulma-menu-item>
            </li>
          </ul>
        </template>
        <bulma-menu-item v-else :item="item"></bulma-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import BulmaMenuItem from './Item'

export default {
  props: { items: { type: Array } },
  data () { return { expandIndex: -1, subHeights: [] } },
  mounted: function () {
    this.$el.querySelectorAll('.sub-menu').forEach(el => {
      this.subHeights[el.dataset.index] = el.scrollHeight
    })
  },
  methods: {
    toggle (index) { this.expandIndex = this.expandIndex === index ? -1 : index }
  },
  components: { BulmaMenuItem }
}
</script>

<style lang="scss">
@import "~css/utils";

.menu {
  margin: 10px 0;

  .menu-label { padding: 0 8px; }

  hr {
    border-top-color: palette(Black, Dividers);
    margin: 10px 0;
  }

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

    .is-angle {
      transition: transform $speed $easing;
      transform: rotate(90deg);
      float: right;
    }

    &.collapsed .is-angle {
      transform: rotate(0deg);
    }
  }

  .sub-menu {
    border-left: 1px solid $border;
    margin: 2px 10px;
    padding-left: 10px;
    overflow: hidden;
    transition: height $speed $easing;
    position: relative;
    height: 0;
    overflow: hidden;
  }
}
</style>

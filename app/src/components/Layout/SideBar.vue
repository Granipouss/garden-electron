<template lang="html">
  <aside class="sidebar" :class="{ 'collapsed': collapsed }">
    <div class="opener" @click="open">
      <span class="icon">
        <i class="fa fa-bars"></i>
      </span>
    </div>
    <div class="bar">
      <slot></slot>
    </div>
    <div class="overlay" @click="close"></div>
  </aside>
</template>

<script>
export default {
  data () { return { collapsed: true } },
  methods: {
    open () { this.collapsed = false },
    close () { this.collapsed = true }
  }
}
</script>

<style lang="scss" scoped>
@import "~css/utils";

$collapsed-width: 32px;
$full-width: 240px;

.sidebar {
  width: $full-width;
  flex-shrink: 0;

  .opener, .bar {
    position: absolute;
    top: 0; bottom: 0;
    background: palette(Grey, 100);
    box-shadow: 0 2px 3px palette(Black, Dividers);
    border-right: 1px solid palette(Black, Dividers);
  }

  .bar {
    z-index: 101;
    width: $full-width;
    transform: translate3d(0, 0, 0);
    transition: transform 3*$speed $easing;
  }

  .opener {
    z-index: 100;
    width: $collapsed-width;
    text-align: center;
    padding-top: 6px;
    color: palette(Black, Hint Text);
  }

  .overlay {
    @include fullSize;
    z-index: 99;
    background: palette(Black, Dividers);
    display: none;
    opacity: 0;
    transition: opacity 3*$speed $easing;
  }

  @include mobile() {
    width: $collapsed-width;

    .overlay {
      display: block;
      opacity: 1;
    }

    .opener { display: block; }

    &.collapsed {
      .bar { transform: translate3d(-100%, 0, 0); }

      .overlay {
        display: none;
        opacity: 0;
      }
    }
  }
}
</style>

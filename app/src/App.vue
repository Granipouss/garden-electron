<template>
  <main class="window">
    <header class="window-header">
      <h1 class="window-name">{{ name }}</h1>

      <div id="expand" @click="expand" v-if="windowActions.expand"></div>
      <div id="reduce" @click="reduce" v-if="windowActions.reduce"></div>
      <div id="close" @click="close"></div>
    </header>

    <div class="window-content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import { remote } from 'electron'
import { name, windowActions } from 'app/config'

export default {
  data () { return { name, windowActions } },
  methods: {
    close () { remote.getCurrentWindow().close() },
    reduce () { remote.getCurrentWindow().minimize() },
    expand () {
      let win = remote.getCurrentWindow()
      win.isMaximized()
        ? win.unmaximize()
        : win.maximize()
    }
  }
}
</script>

<style lang="scss">
// @import "~css/normalize";
@import "~css/palette";
@import "~css/appify";

$header-height: 32px;
$dot-radius: 8px;

html, body, .window {
  overflow: hidden;
  height: 100vh;
}

.window {
  display: flex;
  flex-direction: column;

  .window-content {
     flex-grow: 1;
     position: relative;
   }

  .window-header {
    height: $header-height;
    padding: 0 $header-height / 2;
    -webkit-app-region: drag;
    box-shadow: 0 2px 3px palette(Black, Disabled);
    border-bottom: 1px solid palette(White);
    background:  palette(Grey, 50);
    background: linear-gradient(to bottom,
        palette(Grey, 50) 0%,
        palette(Grey, 200) 100%);
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 999;

    .window-name {
      flex-grow: 1;
      margin: 0; padding: 0;
      color: palette(Black, Icons);
      font-weight: 400;
      font-size: $header-height / 1.6;
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    #close, #reduce, #expand {
      display: block;
      width: $dot-radius * 2;
      height: $dot-radius * 2;
      border-radius: $dot-radius;
      margin-left:  $dot-radius * 0.8;
      opacity: 0.6;
      transition: opacity 120ms ease;
      -webkit-app-region: no-drag;
      cursor: pointer;
      &:hover { opacity: 1; }
    }

    #close { background-color: palette(Red); }
    #reduce { background-color: palette(Amber); }
    #expand { background-color: palette(Green); }
  }
}
</style>

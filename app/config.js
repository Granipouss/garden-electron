'use strict'

// const pkg = require('./package.json')

module.exports = {
  // Name of electron app
  name: 'Garden',

  // Options for the main window
  windowOptions: {
    frame: false,
    titleBarStyle: 'hidden',
    useContentSize: true,
    acceptFirstMouse: true,
    width: 800,
    height: 600,
    minWidth: 420,
    minHeight: 320
  },

  // Show reduce & expand buttons on the main window
  windowActions: {
    reduce: true,
    expand: false
  }
}

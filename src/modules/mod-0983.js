'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0983",
  name: "Pad end to 33 with \"-\"",
  description: "Right-pads the value to width 33 with \"-\".",
  run: (value) => String(value).padEnd(33, "-"),
});

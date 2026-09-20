'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0746",
  name: "Pad end to 23 with \"_\"",
  description: "Right-pads the value to width 23 with \"_\".",
  run: (value) => String(value).padEnd(23, "_"),
});

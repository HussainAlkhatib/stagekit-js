'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0289",
  name: "Pad end to 7 with \"_\"",
  description: "Right-pads the value to width 7 with \"_\".",
  run: (value) => String(value).padEnd(7, "_"),
});

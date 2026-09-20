'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0155",
  name: "Pad end to 5 with \"_\"",
  description: "Right-pads the value to width 5 with \"_\".",
  run: (value) => String(value).padEnd(5, "_"),
});

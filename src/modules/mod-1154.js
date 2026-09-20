'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1154",
  name: "Pad end to 40 with \"_\"",
  description: "Right-pads the value to width 40 with \"_\".",
  run: (value) => String(value).padEnd(40, "_"),
});

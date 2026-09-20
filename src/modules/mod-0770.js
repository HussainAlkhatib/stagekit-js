'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0770",
  name: "Pad end to 24 with \"_\"",
  description: "Right-pads the value to width 24 with \"_\".",
  run: (value) => String(value).padEnd(24, "_"),
});

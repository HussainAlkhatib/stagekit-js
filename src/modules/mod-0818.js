'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0818",
  name: "Pad end to 26 with \"_\"",
  description: "Right-pads the value to width 26 with \"_\".",
  run: (value) => String(value).padEnd(26, "_"),
});

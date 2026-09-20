'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0938",
  name: "Pad end to 31 with \"_\"",
  description: "Right-pads the value to width 31 with \"_\".",
  run: (value) => String(value).padEnd(31, "_"),
});

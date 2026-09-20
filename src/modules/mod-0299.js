'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0299",
  name: "Pad end to 7 with \"#\"",
  description: "Right-pads the value to width 7 with \"#\".",
  run: (value) => String(value).padEnd(7, "#"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0722",
  name: "Pad end to 22 with \"_\"",
  description: "Right-pads the value to width 22 with \"_\".",
  run: (value) => String(value).padEnd(22, "_"),
});

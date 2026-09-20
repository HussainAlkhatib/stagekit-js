'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0845",
  name: "Pad end to 27 with \"*\"",
  description: "Right-pads the value to width 27 with \"*\".",
  run: (value) => String(value).padEnd(27, "*"),
});

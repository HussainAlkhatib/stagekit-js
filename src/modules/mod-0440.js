'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0440",
  name: "Pad end to 11 with \"*\"",
  description: "Right-pads the value to width 11 with \"*\".",
  run: (value) => String(value).padEnd(11, "*"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0334",
  name: "Pad end to 8 with \"*\"",
  description: "Right-pads the value to width 8 with \"*\".",
  run: (value) => String(value).padEnd(8, "*"),
});

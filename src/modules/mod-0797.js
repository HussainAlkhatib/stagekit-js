'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0797",
  name: "Pad end to 25 with \"*\"",
  description: "Right-pads the value to width 25 with \"*\".",
  run: (value) => String(value).padEnd(25, "*"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0240",
  name: "Pad end to 6 with \"*\"",
  description: "Right-pads the value to width 6 with \"*\".",
  run: (value) => String(value).padEnd(6, "*"),
});

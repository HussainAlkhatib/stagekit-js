'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0941",
  name: "Pad end to 31 with \"*\"",
  description: "Right-pads the value to width 31 with \"*\".",
  run: (value) => String(value).padEnd(31, "*"),
});

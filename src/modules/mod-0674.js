'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0674",
  name: "Pad end to 20 with \"_\"",
  description: "Right-pads the value to width 20 with \"_\".",
  run: (value) => String(value).padEnd(20, "_"),
});

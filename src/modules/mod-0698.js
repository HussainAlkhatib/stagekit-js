'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0698",
  name: "Pad end to 21 with \"_\"",
  description: "Right-pads the value to width 21 with \"_\".",
  run: (value) => String(value).padEnd(21, "_"),
});

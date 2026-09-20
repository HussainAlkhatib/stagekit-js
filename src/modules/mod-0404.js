'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0404",
  name: "Pad end to 10 with \"_\"",
  description: "Right-pads the value to width 10 with \"_\".",
  run: (value) => String(value).padEnd(10, "_"),
});

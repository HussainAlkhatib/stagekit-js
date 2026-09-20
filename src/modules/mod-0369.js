'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0369",
  name: "Pad end to 9 with \"_\"",
  description: "Right-pads the value to width 9 with \"_\".",
  run: (value) => String(value).padEnd(9, "_"),
});

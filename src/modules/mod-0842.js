'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0842",
  name: "Pad end to 27 with \"_\"",
  description: "Right-pads the value to width 27 with \"_\".",
  run: (value) => String(value).padEnd(27, "_"),
});

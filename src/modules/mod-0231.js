'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0231",
  name: "Pad end to 6 with \"_\"",
  description: "Right-pads the value to width 6 with \"_\".",
  run: (value) => String(value).padEnd(6, "_"),
});

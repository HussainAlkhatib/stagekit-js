'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0794",
  name: "Pad end to 25 with \"_\"",
  description: "Right-pads the value to width 25 with \"_\".",
  run: (value) => String(value).padEnd(25, "_"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0626",
  name: "Pad end to 18 with \"_\"",
  description: "Right-pads the value to width 18 with \"_\".",
  run: (value) => String(value).padEnd(18, "_"),
});

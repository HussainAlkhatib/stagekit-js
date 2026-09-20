'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0500",
  name: "Pad end to 13 with \"_\"",
  description: "Right-pads the value to width 13 with \"_\".",
  run: (value) => String(value).padEnd(13, "_"),
});

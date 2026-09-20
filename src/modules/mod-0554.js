'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0554",
  name: "Pad end to 15 with \"_\"",
  description: "Right-pads the value to width 15 with \"_\".",
  run: (value) => String(value).padEnd(15, "_"),
});

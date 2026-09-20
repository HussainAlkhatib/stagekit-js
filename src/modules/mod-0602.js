'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0602",
  name: "Pad end to 17 with \"_\"",
  description: "Right-pads the value to width 17 with \"_\".",
  run: (value) => String(value).padEnd(17, "_"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0625",
  name: "Pad start to 18 with \"_\"",
  description: "Left-pads the value to width 18 with \"_\".",
  run: (value) => String(value).padStart(18, "_"),
});

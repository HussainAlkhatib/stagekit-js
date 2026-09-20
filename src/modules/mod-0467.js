'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0467",
  name: "Pad start to 12 with \"_\"",
  description: "Left-pads the value to width 12 with \"_\".",
  run: (value) => String(value).padStart(12, "_"),
});

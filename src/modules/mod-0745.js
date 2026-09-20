'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0745",
  name: "Pad start to 23 with \"_\"",
  description: "Left-pads the value to width 23 with \"_\".",
  run: (value) => String(value).padStart(23, "_"),
});

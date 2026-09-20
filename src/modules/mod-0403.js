'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0403",
  name: "Pad start to 10 with \"_\"",
  description: "Left-pads the value to width 10 with \"_\".",
  run: (value) => String(value).padStart(10, "_"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0154",
  name: "Pad start to 5 with \"_\"",
  description: "Left-pads the value to width 5 with \"_\".",
  run: (value) => String(value).padStart(5, "_"),
});

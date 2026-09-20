'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0832",
  name: "Pad start to 26 with \"~\"",
  description: "Left-pads the value to width 26 with \"~\".",
  run: (value) => String(value).padStart(26, "~"),
});

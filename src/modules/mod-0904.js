'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0904",
  name: "Pad start to 29 with \"~\"",
  description: "Left-pads the value to width 29 with \"~\".",
  run: (value) => String(value).padStart(29, "~"),
});

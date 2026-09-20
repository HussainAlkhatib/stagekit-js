'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0423",
  name: "Pad start to 10 with \"~\"",
  description: "Left-pads the value to width 10 with \"~\".",
  run: (value) => String(value).padStart(10, "~"),
});

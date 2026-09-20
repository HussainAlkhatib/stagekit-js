'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0455",
  name: "Pad start to 11 with \"~\"",
  description: "Left-pads the value to width 11 with \"~\".",
  run: (value) => String(value).padStart(11, "~"),
});

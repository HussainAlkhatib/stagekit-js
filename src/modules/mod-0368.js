'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0368",
  name: "Pad start to 9 with \"_\"",
  description: "Left-pads the value to width 9 with \"_\".",
  run: (value) => String(value).padStart(9, "_"),
});

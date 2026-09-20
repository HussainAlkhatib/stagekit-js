'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0697",
  name: "Pad start to 21 with \"_\"",
  description: "Left-pads the value to width 21 with \"_\".",
  run: (value) => String(value).padStart(21, "_"),
});

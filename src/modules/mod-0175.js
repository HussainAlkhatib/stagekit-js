'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0175",
  name: "Pad start to 5 with \"#\"",
  description: "Left-pads the value to width 5 with \"#\".",
  run: (value) => String(value).padStart(5, "#"),
});

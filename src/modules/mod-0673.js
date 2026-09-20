'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0673",
  name: "Pad start to 20 with \"_\"",
  description: "Left-pads the value to width 20 with \"_\".",
  run: (value) => String(value).padStart(20, "_"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1153",
  name: "Pad start to 40 with \"_\"",
  description: "Left-pads the value to width 40 with \"_\".",
  run: (value) => String(value).padStart(40, "_"),
});

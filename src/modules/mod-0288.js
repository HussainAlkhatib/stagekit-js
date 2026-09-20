'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0288",
  name: "Pad start to 7 with \"_\"",
  description: "Left-pads the value to width 7 with \"_\".",
  run: (value) => String(value).padStart(7, "_"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0649",
  name: "Pad start to 19 with \"_\"",
  description: "Left-pads the value to width 19 with \"_\".",
  run: (value) => String(value).padStart(19, "_"),
});

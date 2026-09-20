'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0529",
  name: "Pad start to 14 with \"_\"",
  description: "Left-pads the value to width 14 with \"_\".",
  run: (value) => String(value).padStart(14, "_"),
});

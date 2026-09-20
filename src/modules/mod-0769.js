'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0769",
  name: "Pad start to 24 with \"_\"",
  description: "Left-pads the value to width 24 with \"_\".",
  run: (value) => String(value).padStart(24, "_"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0499",
  name: "Pad start to 13 with \"_\"",
  description: "Left-pads the value to width 13 with \"_\".",
  run: (value) => String(value).padStart(13, "_"),
});

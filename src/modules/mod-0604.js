'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0604",
  name: "Pad start to 17 with \"*\"",
  description: "Left-pads the value to width 17 with \"*\".",
  run: (value) => String(value).padStart(17, "*"),
});

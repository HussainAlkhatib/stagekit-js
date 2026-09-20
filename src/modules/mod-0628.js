'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0628",
  name: "Pad start to 18 with \"*\"",
  description: "Left-pads the value to width 18 with \"*\".",
  run: (value) => String(value).padStart(18, "*"),
});

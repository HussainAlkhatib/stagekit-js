'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0503",
  name: "Pad start to 13 with \"*\"",
  description: "Left-pads the value to width 13 with \"*\".",
  run: (value) => String(value).padStart(13, "*"),
});

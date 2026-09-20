'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0748",
  name: "Pad start to 23 with \"*\"",
  description: "Left-pads the value to width 23 with \"*\".",
  run: (value) => String(value).padStart(23, "*"),
});

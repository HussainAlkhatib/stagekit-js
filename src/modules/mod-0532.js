'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0532",
  name: "Pad start to 14 with \"*\"",
  description: "Left-pads the value to width 14 with \"*\".",
  run: (value) => String(value).padStart(14, "*"),
});

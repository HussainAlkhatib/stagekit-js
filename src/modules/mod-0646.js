'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0646",
  name: "Pad start to 19 with \"-\"",
  description: "Left-pads the value to width 19 with \"-\".",
  run: (value) => String(value).padStart(19, "-"),
});

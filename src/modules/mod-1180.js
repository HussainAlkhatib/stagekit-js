'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1180",
  name: "Replace \"e\" with \"8\"",
  description: "Replaces every e with 8.",
  run: (value) => String(value).split("e").join("8"),
});

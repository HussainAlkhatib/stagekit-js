'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3498",
  name: "Replace \"Q\" with \"8\"",
  description: "Replaces every Q with 8.",
  run: (value) => String(value).split("Q").join("8"),
});

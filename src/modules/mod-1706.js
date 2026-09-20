'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1706",
  name: "Replace \"n\" with \"L\"",
  description: "Replaces every n with L.",
  run: (value) => String(value).split("n").join("L"),
});

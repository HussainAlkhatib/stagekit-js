'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1693",
  name: "Replace \"n\" with \"y\"",
  description: "Replaces every n with y.",
  run: (value) => String(value).split("n").join("y"),
});

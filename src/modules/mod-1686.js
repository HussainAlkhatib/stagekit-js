'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1686",
  name: "Replace \"n\" with \"r\"",
  description: "Replaces every n with r.",
  run: (value) => String(value).split("n").join("r"),
});

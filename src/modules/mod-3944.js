'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3944",
  name: "Replace \"Y\" with \"r\"",
  description: "Replaces every Y with r.",
  run: (value) => String(value).split("Y").join("r"),
});

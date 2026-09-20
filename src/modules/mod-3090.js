'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3090",
  name: "Replace \"K\" with \"r\"",
  description: "Replaces every K with r.",
  run: (value) => String(value).split("K").join("r"),
});

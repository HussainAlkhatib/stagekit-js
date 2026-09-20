'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3700",
  name: "Replace \"U\" with \"r\"",
  description: "Replaces every U with r.",
  run: (value) => String(value).split("U").join("r"),
});

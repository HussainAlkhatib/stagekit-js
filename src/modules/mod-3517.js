'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3517",
  name: "Replace \"R\" with \"r\"",
  description: "Replaces every R with r.",
  run: (value) => String(value).split("R").join("r"),
});

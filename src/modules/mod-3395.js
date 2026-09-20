'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3395",
  name: "Replace \"P\" with \"r\"",
  description: "Replaces every P with r.",
  run: (value) => String(value).split("P").join("r"),
});

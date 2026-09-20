'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2175",
  name: "Replace \"v\" with \"r\"",
  description: "Replaces every v with r.",
  run: (value) => String(value).split("v").join("r"),
});

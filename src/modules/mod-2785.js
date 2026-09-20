'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2785",
  name: "Replace \"F\" with \"r\"",
  description: "Replaces every F with r.",
  run: (value) => String(value).split("F").join("r"),
});

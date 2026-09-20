'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0882",
  name: "Replace \"d\" with \"r\"",
  description: "Replaces every d with r.",
  run: (value) => String(value).split("d").join("r"),
});

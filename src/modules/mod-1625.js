'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1625",
  name: "Replace \"m\" with \"r\"",
  description: "Replaces every m with r.",
  run: (value) => String(value).split("m").join("r"),
});

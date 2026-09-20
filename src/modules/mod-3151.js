'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3151",
  name: "Replace \"L\" with \"r\"",
  description: "Replaces every L with r.",
  run: (value) => String(value).split("L").join("r"),
});

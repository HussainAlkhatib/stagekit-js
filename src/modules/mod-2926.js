'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2926",
  name: "Replace \"H\" with \"L\"",
  description: "Replaces every H with L.",
  run: (value) => String(value).split("H").join("L"),
});

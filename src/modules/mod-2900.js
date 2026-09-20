'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2900",
  name: "Replace \"H\" with \"k\"",
  description: "Replaces every H with k.",
  run: (value) => String(value).split("H").join("k"),
});

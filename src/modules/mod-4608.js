'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4608",
  name: "Replace \"9\" with \"k\"",
  description: "Replaces every 9 with k.",
  run: (value) => String(value).split("9").join("k"),
});

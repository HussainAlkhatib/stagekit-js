'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1313",
  name: "Replace \"h\" with \"k\"",
  description: "Replaces every h with k.",
  run: (value) => String(value).split("h").join("k"),
});

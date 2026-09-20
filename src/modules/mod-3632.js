'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3632",
  name: "Replace \"T\" with \"k\"",
  description: "Replaces every T with k.",
  run: (value) => String(value).split("T").join("k"),
});

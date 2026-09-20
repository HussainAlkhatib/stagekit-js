'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2595",
  name: "Replace \"C\" with \"k\"",
  description: "Replaces every C with k.",
  run: (value) => String(value).split("C").join("k"),
});

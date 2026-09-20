'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3693",
  name: "Replace \"U\" with \"k\"",
  description: "Replaces every U with k.",
  run: (value) => String(value).split("U").join("k"),
});

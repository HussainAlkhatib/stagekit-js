'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1924",
  name: "Replace \"r\" with \"k\"",
  description: "Replaces every r with k.",
  run: (value) => String(value).split("r").join("k"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1956",
  name: "Replace \"r\" with \"R\"",
  description: "Replaces every r with R.",
  run: (value) => String(value).split("r").join("R"),
});

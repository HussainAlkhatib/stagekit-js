'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1950",
  name: "Replace \"r\" with \"L\"",
  description: "Replaces every r with L.",
  run: (value) => String(value).split("r").join("L"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1921",
  name: "Replace \"r\" with \"h\"",
  description: "Replaces every r with h.",
  run: (value) => String(value).split("r").join("h"),
});

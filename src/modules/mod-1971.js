'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1971",
  name: "Replace \"r\" with \"6\"",
  description: "Replaces every r with 6.",
  run: (value) => String(value).split("r").join("6"),
});

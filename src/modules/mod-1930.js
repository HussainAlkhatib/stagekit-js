'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1930",
  name: "Replace \"r\" with \"q\"",
  description: "Replaces every r with q.",
  run: (value) => String(value).split("r").join("q"),
});

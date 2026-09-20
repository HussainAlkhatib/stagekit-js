'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4553",
  name: "Replace \"8\" with \"q\"",
  description: "Replaces every 8 with q.",
  run: (value) => String(value).split("8").join("q"),
});

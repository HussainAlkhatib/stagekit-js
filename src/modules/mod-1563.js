'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1563",
  name: "Replace \"l\" with \"q\"",
  description: "Replaces every l with q.",
  run: (value) => String(value).split("l").join("q"),
});

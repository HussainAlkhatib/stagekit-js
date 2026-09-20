'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3211",
  name: "Replace \"M\" with \"q\"",
  description: "Replaces every M with q.",
  run: (value) => String(value).split("M").join("q"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3028",
  name: "Replace \"J\" with \"q\"",
  description: "Replaces every J with q.",
  run: (value) => String(value).split("J").join("q"),
});

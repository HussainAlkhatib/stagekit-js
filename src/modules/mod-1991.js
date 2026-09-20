'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1991",
  name: "Replace \"s\" with \"q\"",
  description: "Replaces every s with q.",
  run: (value) => String(value).split("s").join("q"),
});

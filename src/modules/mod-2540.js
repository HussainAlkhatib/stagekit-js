'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2540",
  name: "Replace \"B\" with \"q\"",
  description: "Replaces every B with q.",
  run: (value) => String(value).split("B").join("q"),
});

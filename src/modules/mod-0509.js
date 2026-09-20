'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0509",
  name: "Replace \"b\" with \"q\"",
  description: "Replaces every b with q.",
  run: (value) => String(value).split("b").join("q"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2601",
  name: "Replace \"C\" with \"q\"",
  description: "Replaces every C with q.",
  run: (value) => String(value).split("C").join("q"),
});

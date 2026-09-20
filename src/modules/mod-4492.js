'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4492",
  name: "Replace \"7\" with \"q\"",
  description: "Replaces every 7 with q.",
  run: (value) => String(value).split("7").join("q"),
});

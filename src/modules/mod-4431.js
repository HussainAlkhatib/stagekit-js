'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4431",
  name: "Replace \"6\" with \"q\"",
  description: "Replaces every 6 with q.",
  run: (value) => String(value).split("6").join("q"),
});

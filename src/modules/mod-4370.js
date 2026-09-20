'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4370",
  name: "Replace \"5\" with \"q\"",
  description: "Replaces every 5 with q.",
  run: (value) => String(value).split("5").join("q"),
});

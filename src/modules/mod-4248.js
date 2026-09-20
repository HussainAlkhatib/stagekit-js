'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4248",
  name: "Replace \"3\" with \"q\"",
  description: "Replaces every 3 with q.",
  run: (value) => String(value).split("3").join("q"),
});

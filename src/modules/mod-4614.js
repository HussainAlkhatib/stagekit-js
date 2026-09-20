'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4614",
  name: "Replace \"9\" with \"q\"",
  description: "Replaces every 9 with q.",
  run: (value) => String(value).split("9").join("q"),
});

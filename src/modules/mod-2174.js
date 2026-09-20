'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2174",
  name: "Replace \"v\" with \"q\"",
  description: "Replaces every v with q.",
  run: (value) => String(value).split("v").join("q"),
});

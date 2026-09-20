'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4065",
  name: "Replace \"0\" with \"q\"",
  description: "Replaces every 0 with q.",
  run: (value) => String(value).split("0").join("q"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4500",
  name: "Replace \"7\" with \"y\"",
  description: "Replaces every 7 with y.",
  run: (value) => String(value).split("7").join("y"),
});

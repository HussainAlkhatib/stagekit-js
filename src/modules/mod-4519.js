'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4519",
  name: "Replace \"7\" with \"R\"",
  description: "Replaces every 7 with R.",
  run: (value) => String(value).split("7").join("R"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4521",
  name: "Replace \"7\" with \"T\"",
  description: "Replaces every 7 with T.",
  run: (value) => String(value).split("7").join("T"),
});

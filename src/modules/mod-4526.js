'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4526",
  name: "Replace \"7\" with \"Y\"",
  description: "Replaces every 7 with Y.",
  run: (value) => String(value).split("7").join("Y"),
});

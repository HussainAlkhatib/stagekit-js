'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4504",
  name: "Replace \"7\" with \"C\"",
  description: "Replaces every 7 with C.",
  run: (value) => String(value).split("7").join("C"),
});

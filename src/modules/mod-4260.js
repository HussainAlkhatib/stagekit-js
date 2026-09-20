'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4260",
  name: "Replace \"3\" with \"C\"",
  description: "Replaces every 3 with C.",
  run: (value) => String(value).split("3").join("C"),
});

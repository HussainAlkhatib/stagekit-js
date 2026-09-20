'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4138",
  name: "Replace \"1\" with \"C\"",
  description: "Replaces every 1 with C.",
  run: (value) => String(value).split("1").join("C"),
});

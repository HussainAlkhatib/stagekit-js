'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4434",
  name: "Replace \"6\" with \"t\"",
  description: "Replaces every 6 with t.",
  run: (value) => String(value).split("6").join("t"),
});

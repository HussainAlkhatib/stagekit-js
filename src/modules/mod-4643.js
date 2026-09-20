'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4643",
  name: "Replace \"9\" with \"T\"",
  description: "Replaces every 9 with T.",
  run: (value) => String(value).split("9").join("T"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4155",
  name: "Replace \"1\" with \"T\"",
  description: "Replaces every 1 with T.",
  run: (value) => String(value).split("1").join("T"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4195",
  name: "Replace \"2\" with \"y\"",
  description: "Replaces every 2 with y.",
  run: (value) => String(value).split("2").join("y"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4134",
  name: "Replace \"1\" with \"y\"",
  description: "Replaces every 1 with y.",
  run: (value) => String(value).split("1").join("y"),
});

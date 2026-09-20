'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3524",
  name: "Replace \"R\" with \"y\"",
  description: "Replaces every R with y.",
  run: (value) => String(value).split("R").join("y"),
});

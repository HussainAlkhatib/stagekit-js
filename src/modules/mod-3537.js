'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3537",
  name: "Replace \"R\" with \"L\"",
  description: "Replaces every R with L.",
  run: (value) => String(value).split("R").join("L"),
});

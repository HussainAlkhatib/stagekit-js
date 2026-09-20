'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3542",
  name: "Replace \"R\" with \"Q\"",
  description: "Replaces every R with Q.",
  run: (value) => String(value).split("R").join("Q"),
});

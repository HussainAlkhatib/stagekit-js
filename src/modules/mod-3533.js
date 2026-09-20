'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3533",
  name: "Replace \"R\" with \"H\"",
  description: "Replaces every R with H.",
  run: (value) => String(value).split("R").join("H"),
});

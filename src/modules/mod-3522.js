'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3522",
  name: "Replace \"R\" with \"w\"",
  description: "Replaces every R with w.",
  run: (value) => String(value).split("R").join("w"),
});

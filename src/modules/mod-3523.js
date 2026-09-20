'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3523",
  name: "Replace \"R\" with \"x\"",
  description: "Replaces every R with x.",
  run: (value) => String(value).split("R").join("x"),
});

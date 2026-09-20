'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3515",
  name: "Replace \"R\" with \"p\"",
  description: "Replaces every R with p.",
  run: (value) => String(value).split("R").join("p"),
});

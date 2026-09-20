'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3554",
  name: "Replace \"R\" with \"3\"",
  description: "Replaces every R with 3.",
  run: (value) => String(value).split("R").join("3"),
});

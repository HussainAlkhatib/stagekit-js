'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3509",
  name: "Replace \"R\" with \"j\"",
  description: "Replaces every R with j.",
  run: (value) => String(value).split("R").join("j"),
});

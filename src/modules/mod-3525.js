'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3525",
  name: "Replace \"R\" with \"z\"",
  description: "Replaces every R with z.",
  run: (value) => String(value).split("R").join("z"),
});

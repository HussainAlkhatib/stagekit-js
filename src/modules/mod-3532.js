'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3532",
  name: "Replace \"R\" with \"G\"",
  description: "Replaces every R with G.",
  run: (value) => String(value).split("R").join("G"),
});

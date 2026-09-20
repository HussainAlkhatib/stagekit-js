'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2322",
  name: "Replace \"x\" with \"R\"",
  description: "Replaces every x with R.",
  run: (value) => String(value).split("x").join("R"),
});

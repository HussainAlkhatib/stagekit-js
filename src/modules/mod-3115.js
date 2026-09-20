'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3115",
  name: "Replace \"K\" with \"R\"",
  description: "Replaces every K with R.",
  run: (value) => String(value).split("K").join("R"),
});

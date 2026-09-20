'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3133",
  name: "Replace \"K\" with \"9\"",
  description: "Replaces every K with 9.",
  run: (value) => String(value).split("K").join("9"),
});

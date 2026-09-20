'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2828",
  name: "Replace \"F\" with \"9\"",
  description: "Replaces every F with 9.",
  run: (value) => String(value).split("F").join("9"),
});

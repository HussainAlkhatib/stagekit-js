'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2810",
  name: "Replace \"F\" with \"R\"",
  description: "Replaces every F with R.",
  run: (value) => String(value).split("F").join("R"),
});

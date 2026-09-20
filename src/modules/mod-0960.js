'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0960",
  name: "Replace \"d\" with \"R\"",
  description: "Replaces every d with R.",
  run: (value) => String(value).split("d").join("R"),
});

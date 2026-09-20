'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1651",
  name: "Replace \"m\" with \"R\"",
  description: "Replaces every m with R.",
  run: (value) => String(value).split("m").join("R"),
});

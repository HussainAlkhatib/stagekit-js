'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1834",
  name: "Replace \"p\" with \"R\"",
  description: "Replaces every p with R.",
  run: (value) => String(value).split("p").join("R"),
});

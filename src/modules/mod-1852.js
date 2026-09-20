'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1852",
  name: "Replace \"p\" with \"9\"",
  description: "Replaces every p with 9.",
  run: (value) => String(value).split("p").join("9"),
});

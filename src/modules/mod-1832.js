'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1832",
  name: "Replace \"p\" with \"P\"",
  description: "Replaces every p with P.",
  run: (value) => String(value).split("p").join("P"),
});

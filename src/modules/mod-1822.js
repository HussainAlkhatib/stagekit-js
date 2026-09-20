'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1822",
  name: "Replace \"p\" with \"F\"",
  description: "Replaces every p with F.",
  run: (value) => String(value).split("p").join("F"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1830",
  name: "Replace \"p\" with \"N\"",
  description: "Replaces every p with N.",
  run: (value) => String(value).split("p").join("N"),
});

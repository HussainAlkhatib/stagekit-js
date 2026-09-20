'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1828",
  name: "Replace \"p\" with \"L\"",
  description: "Replaces every p with L.",
  run: (value) => String(value).split("p").join("L"),
});

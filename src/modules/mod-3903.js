'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3903",
  name: "Replace \"X\" with \"L\"",
  description: "Replaces every X with L.",
  run: (value) => String(value).split("X").join("L"),
});

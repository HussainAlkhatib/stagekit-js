'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3909",
  name: "Replace \"X\" with \"R\"",
  description: "Replaces every X with R.",
  run: (value) => String(value).split("X").join("R"),
});

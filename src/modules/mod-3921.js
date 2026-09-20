'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3921",
  name: "Replace \"X\" with \"4\"",
  description: "Replaces every X with 4.",
  run: (value) => String(value).split("X").join("4"),
});

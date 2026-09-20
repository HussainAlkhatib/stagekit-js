'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3870",
  name: "Replace \"X\" with \"e\"",
  description: "Replaces every X with e.",
  run: (value) => String(value).split("X").join("e"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3917",
  name: "Replace \"X\" with \"0\"",
  description: "Replaces every X with 0.",
  run: (value) => String(value).split("X").join("0"),
});

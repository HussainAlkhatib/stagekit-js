'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3892",
  name: "Replace \"X\" with \"A\"",
  description: "Replaces every X with A.",
  run: (value) => String(value).split("X").join("A"),
});

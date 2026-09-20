'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3901",
  name: "Replace \"X\" with \"J\"",
  description: "Replaces every X with J.",
  run: (value) => String(value).split("X").join("J"),
});

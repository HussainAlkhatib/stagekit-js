'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3920",
  name: "Replace \"X\" with \"3\"",
  description: "Replaces every X with 3.",
  run: (value) => String(value).split("X").join("3"),
});

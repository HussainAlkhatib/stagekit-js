'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0564",
  name: "Replace \"b\" with \"H\"",
  description: "Replaces every b with H.",
  run: (value) => String(value).split("b").join("H"),
});

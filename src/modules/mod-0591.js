'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0591",
  name: "Replace \"b\" with \"Q\"",
  description: "Replaces every b with Q.",
  run: (value) => String(value).split("b").join("Q"),
});

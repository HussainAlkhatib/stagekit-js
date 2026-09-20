'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2565",
  name: "Replace \"B\" with \"Q\"",
  description: "Replaces every B with Q.",
  run: (value) => String(value).split("B").join("Q"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0957",
  name: "Replace \"d\" with \"Q\"",
  description: "Replaces every d with Q.",
  run: (value) => String(value).split("d").join("Q"),
});

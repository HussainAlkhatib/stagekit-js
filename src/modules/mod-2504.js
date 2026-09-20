'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2504",
  name: "Replace \"A\" with \"Q\"",
  description: "Replaces every A with Q.",
  run: (value) => String(value).split("A").join("Q"),
});

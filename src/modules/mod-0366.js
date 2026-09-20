'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0366",
  name: "Replace \"a\" with \"Q\"",
  description: "Replaces every a with Q.",
  run: (value) => String(value).split("a").join("Q"),
});

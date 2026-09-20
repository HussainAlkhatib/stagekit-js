'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3786",
  name: "Replace \"V\" with \"Q\"",
  description: "Replaces every V with Q.",
  run: (value) => String(value).split("V").join("Q"),
});

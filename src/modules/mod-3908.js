'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3908",
  name: "Replace \"X\" with \"Q\"",
  description: "Replaces every X with Q.",
  run: (value) => String(value).split("X").join("Q"),
});

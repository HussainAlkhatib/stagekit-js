'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2382",
  name: "Replace \"y\" with \"Q\"",
  description: "Replaces every y with Q.",
  run: (value) => String(value).split("y").join("Q"),
});

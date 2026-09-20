'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2016",
  name: "Replace \"s\" with \"Q\"",
  description: "Replaces every s with Q.",
  run: (value) => String(value).split("s").join("Q"),
});

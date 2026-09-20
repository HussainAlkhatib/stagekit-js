'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3969",
  name: "Replace \"Y\" with \"Q\"",
  description: "Replaces every Y with Q.",
  run: (value) => String(value).split("Y").join("Q"),
});

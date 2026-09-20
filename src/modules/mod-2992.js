'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2992",
  name: "Replace \"I\" with \"Q\"",
  description: "Replaces every I with Q.",
  run: (value) => String(value).split("I").join("Q"),
});

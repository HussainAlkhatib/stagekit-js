'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2987",
  name: "Replace \"I\" with \"L\"",
  description: "Replaces every I with L.",
  run: (value) => String(value).split("I").join("L"),
});

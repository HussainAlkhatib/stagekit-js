'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2957",
  name: "Replace \"I\" with \"g\"",
  description: "Replaces every I with g.",
  run: (value) => String(value).split("I").join("g"),
});

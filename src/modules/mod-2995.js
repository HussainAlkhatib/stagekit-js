'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2995",
  name: "Replace \"I\" with \"T\"",
  description: "Replaces every I with T.",
  run: (value) => String(value).split("I").join("T"),
});

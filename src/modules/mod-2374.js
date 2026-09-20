'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2374",
  name: "Replace \"y\" with \"I\"",
  description: "Replaces every y with I.",
  run: (value) => String(value).split("y").join("I"),
});

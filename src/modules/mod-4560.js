'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4560",
  name: "Replace \"8\" with \"x\"",
  description: "Replaces every 8 with x.",
  run: (value) => String(value).split("8").join("x"),
});

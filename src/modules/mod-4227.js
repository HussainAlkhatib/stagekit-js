'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4227",
  name: "Replace \"2\" with \"5\"",
  description: "Replaces every 2 with 5.",
  run: (value) => String(value).split("2").join("5"),
});

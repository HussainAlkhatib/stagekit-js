'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4105",
  name: "Replace \"0\" with \"5\"",
  description: "Replaces every 0 with 5.",
  run: (value) => String(value).split("0").join("5"),
});

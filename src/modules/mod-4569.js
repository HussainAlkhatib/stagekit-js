'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4569",
  name: "Replace \"8\" with \"G\"",
  description: "Replaces every 8 with G.",
  run: (value) => String(value).split("8").join("G"),
});

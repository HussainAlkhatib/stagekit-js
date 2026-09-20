'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3826",
  name: "Replace \"W\" with \"v\"",
  description: "Replaces every W with v.",
  run: (value) => String(value).split("W").join("v"),
});

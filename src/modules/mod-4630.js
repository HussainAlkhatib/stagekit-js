'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4630",
  name: "Replace \"9\" with \"G\"",
  description: "Replaces every 9 with G.",
  run: (value) => String(value).split("9").join("G"),
});

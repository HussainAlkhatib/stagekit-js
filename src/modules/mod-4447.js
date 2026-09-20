'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4447",
  name: "Replace \"6\" with \"G\"",
  description: "Replaces every 6 with G.",
  run: (value) => String(value).split("6").join("G"),
});

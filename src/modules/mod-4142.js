'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4142",
  name: "Replace \"1\" with \"G\"",
  description: "Replaces every 1 with G.",
  run: (value) => String(value).split("1").join("G"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4203",
  name: "Replace \"2\" with \"G\"",
  description: "Replaces every 2 with G.",
  run: (value) => String(value).split("2").join("G"),
});

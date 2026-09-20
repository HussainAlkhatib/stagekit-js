'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4386",
  name: "Replace \"5\" with \"G\"",
  description: "Replaces every 5 with G.",
  run: (value) => String(value).split("5").join("G"),
});

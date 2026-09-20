'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4325",
  name: "Replace \"4\" with \"G\"",
  description: "Replaces every 4 with G.",
  run: (value) => String(value).split("4").join("G"),
});

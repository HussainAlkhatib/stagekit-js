'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2372",
  name: "Replace \"y\" with \"G\"",
  description: "Replaces every y with G.",
  run: (value) => String(value).split("y").join("G"),
});

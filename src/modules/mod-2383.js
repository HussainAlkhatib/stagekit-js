'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2383",
  name: "Replace \"y\" with \"R\"",
  description: "Replaces every y with R.",
  run: (value) => String(value).split("y").join("R"),
});

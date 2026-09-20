'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3970",
  name: "Replace \"Y\" with \"R\"",
  description: "Replaces every Y with R.",
  run: (value) => String(value).split("Y").join("R"),
});

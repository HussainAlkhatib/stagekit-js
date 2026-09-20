'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4160",
  name: "Replace \"1\" with \"Y\"",
  description: "Replaces every 1 with Y.",
  run: (value) => String(value).split("1").join("Y"),
});

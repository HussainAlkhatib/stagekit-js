'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4587",
  name: "Replace \"8\" with \"Y\"",
  description: "Replaces every 8 with Y.",
  run: (value) => String(value).split("8").join("Y"),
});

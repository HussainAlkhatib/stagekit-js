'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4282",
  name: "Replace \"3\" with \"Y\"",
  description: "Replaces every 3 with Y.",
  run: (value) => String(value).split("3").join("Y"),
});

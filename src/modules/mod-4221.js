'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4221",
  name: "Replace \"2\" with \"Y\"",
  description: "Replaces every 2 with Y.",
  run: (value) => String(value).split("2").join("Y"),
});

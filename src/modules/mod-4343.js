'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4343",
  name: "Replace \"4\" with \"Y\"",
  description: "Replaces every 4 with Y.",
  run: (value) => String(value).split("4").join("Y"),
});

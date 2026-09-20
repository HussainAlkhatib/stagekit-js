'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3671",
  name: "Replace \"T\" with \"Y\"",
  description: "Replaces every T with Y.",
  run: (value) => String(value).split("T").join("Y"),
});

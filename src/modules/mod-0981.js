'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0981",
  name: "Replace \"d\" with \"Y\"",
  description: "Replaces every d with Y.",
  run: (value) => String(value).split("d").join("Y"),
});

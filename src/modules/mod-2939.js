'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2939",
  name: "Replace \"H\" with \"Y\"",
  description: "Replaces every H with Y.",
  run: (value) => String(value).split("H").join("Y"),
});

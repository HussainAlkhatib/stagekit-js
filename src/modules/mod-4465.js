'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4465",
  name: "Replace \"6\" with \"Y\"",
  description: "Replaces every 6 with Y.",
  run: (value) => String(value).split("6").join("Y"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3915",
  name: "Replace \"X\" with \"Y\"",
  description: "Replaces every X with Y.",
  run: (value) => String(value).split("X").join("Y"),
});

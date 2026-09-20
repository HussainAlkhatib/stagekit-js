'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3061",
  name: "Replace \"J\" with \"Y\"",
  description: "Replaces every J with Y.",
  run: (value) => String(value).split("J").join("Y"),
});

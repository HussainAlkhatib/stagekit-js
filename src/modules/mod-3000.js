'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3000",
  name: "Replace \"I\" with \"Y\"",
  description: "Replaces every I with Y.",
  run: (value) => String(value).split("I").join("Y"),
});

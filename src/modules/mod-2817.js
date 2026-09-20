'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2817",
  name: "Replace \"F\" with \"Y\"",
  description: "Replaces every F with Y.",
  run: (value) => String(value).split("F").join("Y"),
});

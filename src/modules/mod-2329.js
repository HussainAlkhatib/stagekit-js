'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2329",
  name: "Replace \"x\" with \"Y\"",
  description: "Replaces every x with Y.",
  run: (value) => String(value).split("x").join("Y"),
});

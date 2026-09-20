'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3939",
  name: "Replace \"Y\" with \"m\"",
  description: "Replaces every Y with m.",
  run: (value) => String(value).split("Y").join("m"),
});

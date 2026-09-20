'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2902",
  name: "Replace \"H\" with \"m\"",
  description: "Replaces every H with m.",
  run: (value) => String(value).split("H").join("m"),
});

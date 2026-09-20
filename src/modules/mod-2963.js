'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2963",
  name: "Replace \"I\" with \"m\"",
  description: "Replaces every I with m.",
  run: (value) => String(value).split("I").join("m"),
});

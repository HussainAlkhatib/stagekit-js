'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2780",
  name: "Replace \"F\" with \"m\"",
  description: "Replaces every F with m.",
  run: (value) => String(value).split("F").join("m"),
});

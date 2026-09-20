'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4244",
  name: "Replace \"3\" with \"m\"",
  description: "Replaces every 3 with m.",
  run: (value) => String(value).split("3").join("m"),
});

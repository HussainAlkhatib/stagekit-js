'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2536",
  name: "Replace \"B\" with \"m\"",
  description: "Replaces every B with m.",
  run: (value) => String(value).split("B").join("m"),
});

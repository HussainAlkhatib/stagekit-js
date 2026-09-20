'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2109",
  name: "Replace \"u\" with \"m\"",
  description: "Replaces every u with m.",
  run: (value) => String(value).split("u").join("m"),
});

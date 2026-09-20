'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3268",
  name: "Replace \"N\" with \"m\"",
  description: "Replaces every N with m.",
  run: (value) => String(value).split("N").join("m"),
});

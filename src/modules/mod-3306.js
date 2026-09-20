'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3306",
  name: "Replace \"N\" with \"Z\"",
  description: "Replaces every N with Z.",
  run: (value) => String(value).split("N").join("Z"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2812",
  name: "Replace \"F\" with \"T\"",
  description: "Replaces every F with T.",
  run: (value) => String(value).split("F").join("T"),
});

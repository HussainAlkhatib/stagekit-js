'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3123",
  name: "Replace \"K\" with \"Z\"",
  description: "Replaces every K with Z.",
  run: (value) => String(value).split("K").join("Z"),
});

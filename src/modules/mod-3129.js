'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3129",
  name: "Replace \"K\" with \"5\"",
  description: "Replaces every K with 5.",
  run: (value) => String(value).split("K").join("5"),
});

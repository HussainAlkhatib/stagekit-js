'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2789",
  name: "Replace \"F\" with \"v\"",
  description: "Replaces every F with v.",
  run: (value) => String(value).split("F").join("v"),
});

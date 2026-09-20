'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3094",
  name: "Replace \"K\" with \"v\"",
  description: "Replaces every K with v.",
  run: (value) => String(value).split("K").join("v"),
});

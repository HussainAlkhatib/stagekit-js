'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3130",
  name: "Replace \"K\" with \"6\"",
  description: "Replaces every K with 6.",
  run: (value) => String(value).split("K").join("6"),
});

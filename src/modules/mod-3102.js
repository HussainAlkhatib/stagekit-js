'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3102",
  name: "Replace \"K\" with \"D\"",
  description: "Replaces every K with D.",
  run: (value) => String(value).split("K").join("D"),
});

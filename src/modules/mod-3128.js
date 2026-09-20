'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3128",
  name: "Replace \"K\" with \"4\"",
  description: "Replaces every K with 4.",
  run: (value) => String(value).split("K").join("4"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3089",
  name: "Replace \"K\" with \"q\"",
  description: "Replaces every K with q.",
  run: (value) => String(value).split("K").join("q"),
});

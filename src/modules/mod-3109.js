'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3109",
  name: "Replace \"K\" with \"L\"",
  description: "Replaces every K with L.",
  run: (value) => String(value).split("K").join("L"),
});

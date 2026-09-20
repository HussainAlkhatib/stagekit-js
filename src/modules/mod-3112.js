'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3112",
  name: "Replace \"K\" with \"O\"",
  description: "Replaces every K with O.",
  run: (value) => String(value).split("K").join("O"),
});

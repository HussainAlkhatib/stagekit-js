'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3540",
  name: "Replace \"R\" with \"O\"",
  description: "Replaces every R with O.",
  run: (value) => String(value).split("R").join("O"),
});

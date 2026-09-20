'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3601",
  name: "Replace \"S\" with \"O\"",
  description: "Replaces every S with O.",
  run: (value) => String(value).split("S").join("O"),
});

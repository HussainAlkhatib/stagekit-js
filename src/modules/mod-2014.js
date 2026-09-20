'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2014",
  name: "Replace \"s\" with \"O\"",
  description: "Replaces every s with O.",
  run: (value) => String(value).split("s").join("O"),
});

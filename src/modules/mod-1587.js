'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1587",
  name: "Replace \"l\" with \"O\"",
  description: "Replaces every l with O.",
  run: (value) => String(value).split("l").join("O"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3784",
  name: "Replace \"V\" with \"O\"",
  description: "Replaces every V with O.",
  run: (value) => String(value).split("V").join("O"),
});

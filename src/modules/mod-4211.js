'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4211",
  name: "Replace \"2\" with \"O\"",
  description: "Replaces every 2 with O.",
  run: (value) => String(value).split("2").join("O"),
});

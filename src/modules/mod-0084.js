'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0084",
  name: "Trim lines",
  description: "Trims whitespace on every line.",
  run: (value) => String(value).split('\n').map((line) => line.trim()).join('\n'),
});

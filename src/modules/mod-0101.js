'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0101",
  name: "Drop empty lines",
  description: "Removes blank lines.",
  run: (value) => String(value).split('\n').filter((line) => line.trim().length > 0).join('\n'),
});

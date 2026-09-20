'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0033",
  name: "Reverse lines",
  description: "Reverses the order of lines.",
  run: (value) => String(value).split('\n').reverse().join('\n'),
});

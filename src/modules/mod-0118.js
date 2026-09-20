'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0118",
  name: "Number lines",
  description: "Numbers each line.",
  run: (value) => String(value).split('\n').map((line, i) => (i + 1) + '. ' + line).join('\n'),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0067",
  name: "Unique lines",
  description: "Removes duplicate lines.",
  run: (value) => Array.from(new Set(String(value).split('\n'))).join('\n'),
});

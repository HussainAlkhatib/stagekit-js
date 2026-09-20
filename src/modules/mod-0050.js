'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0050",
  name: "Sort lines",
  description: "Sorts lines ascending.",
  run: (value) => String(value).split('\n').sort().join('\n'),
});

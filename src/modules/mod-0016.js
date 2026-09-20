'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0016",
  name: "Reverse characters",
  description: "Reverses the order of characters.",
  run: (value) => String(value).split('').reverse().join(''),
});

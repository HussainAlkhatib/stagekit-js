'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0082",
  name: "Swap case",
  description: "Swaps the case of every character.",
  run: (value) => String(value).split('').map((ch) => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join(''),
});

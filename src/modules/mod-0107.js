'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0107",
  name: "Repeat x8",
  description: "Repeats the value 8 times.",
  run: (value) => String(value).repeat(8),
});

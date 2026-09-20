'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0039",
  name: "Repeat x4",
  description: "Repeats the value 4 times.",
  run: (value) => String(value).repeat(4),
});

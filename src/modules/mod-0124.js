'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0124",
  name: "Repeat x9",
  description: "Repeats the value 9 times.",
  run: (value) => String(value).repeat(9),
});

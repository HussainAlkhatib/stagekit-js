'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0005",
  name: "Repeat x2",
  description: "Repeats the value 2 times.",
  run: (value) => String(value).repeat(2),
});

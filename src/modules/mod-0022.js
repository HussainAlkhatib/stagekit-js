'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0022",
  name: "Repeat x3",
  description: "Repeats the value 3 times.",
  run: (value) => String(value).repeat(3),
});

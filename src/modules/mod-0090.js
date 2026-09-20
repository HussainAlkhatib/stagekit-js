'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0090",
  name: "Repeat x7",
  description: "Repeats the value 7 times.",
  run: (value) => String(value).repeat(7),
});

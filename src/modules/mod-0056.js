'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0056",
  name: "Repeat x5",
  description: "Repeats the value 5 times.",
  run: (value) => String(value).repeat(5),
});

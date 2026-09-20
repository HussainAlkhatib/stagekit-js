'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0140",
  name: "Repeat x10",
  description: "Repeats the value 10 times.",
  run: (value) => String(value).repeat(10),
});

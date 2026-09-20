'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0073",
  name: "Repeat x6",
  description: "Repeats the value 6 times.",
  run: (value) => String(value).repeat(6),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1602",
  name: "Replace \"l\" with \"3\"",
  description: "Replaces every l with 3.",
  run: (value) => String(value).split("l").join("3"),
});

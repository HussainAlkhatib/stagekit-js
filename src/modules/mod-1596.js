'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1596",
  name: "Replace \"l\" with \"X\"",
  description: "Replaces every l with X.",
  run: (value) => String(value).split("l").join("X"),
});

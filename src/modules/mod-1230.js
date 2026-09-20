'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1230",
  name: "Replace \"f\" with \"X\"",
  description: "Replaces every f with X.",
  run: (value) => String(value).split("f").join("X"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2755",
  name: "Replace \"E\" with \"X\"",
  description: "Replaces every E with X.",
  run: (value) => String(value).split("E").join("X"),
});

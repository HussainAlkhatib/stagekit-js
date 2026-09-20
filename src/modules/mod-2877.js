'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2877",
  name: "Replace \"G\" with \"X\"",
  description: "Replaces every G with X.",
  run: (value) => String(value).split("G").join("X"),
});

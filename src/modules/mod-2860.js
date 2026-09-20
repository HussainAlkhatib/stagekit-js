'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2860",
  name: "Replace \"G\" with \"F\"",
  description: "Replaces every G with F.",
  run: (value) => String(value).split("G").join("F"),
});

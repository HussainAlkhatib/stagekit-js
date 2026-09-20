'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2867",
  name: "Replace \"G\" with \"N\"",
  description: "Replaces every G with N.",
  run: (value) => String(value).split("G").join("N"),
});

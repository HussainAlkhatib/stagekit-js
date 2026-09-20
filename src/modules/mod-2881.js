'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2881",
  name: "Replace \"G\" with \"1\"",
  description: "Replaces every G with 1.",
  run: (value) => String(value).split("G").join("1"),
});

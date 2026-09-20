'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2883",
  name: "Replace \"G\" with \"3\"",
  description: "Replaces every G with 3.",
  run: (value) => String(value).split("G").join("3"),
});

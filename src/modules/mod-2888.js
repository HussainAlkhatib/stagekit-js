'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2888",
  name: "Replace \"G\" with \"8\"",
  description: "Replaces every G with 8.",
  run: (value) => String(value).split("G").join("8"),
});

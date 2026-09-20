'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2846",
  name: "Replace \"G\" with \"r\"",
  description: "Replaces every G with r.",
  run: (value) => String(value).split("G").join("r"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2838",
  name: "Replace \"G\" with \"j\"",
  description: "Replaces every G with j.",
  run: (value) => String(value).split("G").join("j"),
});

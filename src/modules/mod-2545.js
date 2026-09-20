'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2545",
  name: "Replace \"B\" with \"v\"",
  description: "Replaces every B with v.",
  run: (value) => String(value).split("B").join("v"),
});

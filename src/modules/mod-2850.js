'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2850",
  name: "Replace \"G\" with \"v\"",
  description: "Replaces every G with v.",
  run: (value) => String(value).split("G").join("v"),
});

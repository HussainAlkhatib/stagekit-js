'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2873",
  name: "Replace \"G\" with \"T\"",
  description: "Replaces every G with T.",
  run: (value) => String(value).split("G").join("T"),
});

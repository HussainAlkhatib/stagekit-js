'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2886",
  name: "Replace \"G\" with \"6\"",
  description: "Replaces every G with 6.",
  run: (value) => String(value).split("G").join("6"),
});

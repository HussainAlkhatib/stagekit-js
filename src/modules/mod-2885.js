'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2885",
  name: "Replace \"G\" with \"5\"",
  description: "Replaces every G with 5.",
  run: (value) => String(value).split("G").join("5"),
});

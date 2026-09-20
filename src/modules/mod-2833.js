'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2833",
  name: "Replace \"G\" with \"e\"",
  description: "Replaces every G with e.",
  run: (value) => String(value).split("G").join("e"),
});

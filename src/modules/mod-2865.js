'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2865",
  name: "Replace \"G\" with \"L\"",
  description: "Replaces every G with L.",
  run: (value) => String(value).split("G").join("L"),
});

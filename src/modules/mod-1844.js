'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1844",
  name: "Replace \"p\" with \"1\"",
  description: "Replaces every p with 1.",
  run: (value) => String(value).split("p").join("1"),
});

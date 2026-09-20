'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2759",
  name: "Replace \"E\" with \"1\"",
  description: "Replaces every E with 1.",
  run: (value) => String(value).split("E").join("1"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4346",
  name: "Replace \"4\" with \"1\"",
  description: "Replaces every 4 with 1.",
  run: (value) => String(value).split("4").join("1"),
});

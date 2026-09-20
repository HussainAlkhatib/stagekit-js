'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4651",
  name: "Replace \"9\" with \"1\"",
  description: "Replaces every 9 with 1.",
  run: (value) => String(value).split("9").join("1"),
});

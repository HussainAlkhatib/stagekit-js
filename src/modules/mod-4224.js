'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4224",
  name: "Replace \"2\" with \"1\"",
  description: "Replaces every 2 with 1.",
  run: (value) => String(value).split("2").join("1"),
});

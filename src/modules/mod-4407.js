'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4407",
  name: "Replace \"5\" with \"1\"",
  description: "Replaces every 5 with 1.",
  run: (value) => String(value).split("5").join("1"),
});

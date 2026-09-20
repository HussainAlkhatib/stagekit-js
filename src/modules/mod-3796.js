'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3796",
  name: "Replace \"V\" with \"1\"",
  description: "Replaces every V with 1.",
  run: (value) => String(value).split("V").join("1"),
});

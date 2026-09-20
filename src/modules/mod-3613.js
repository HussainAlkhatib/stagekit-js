'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3613",
  name: "Replace \"S\" with \"1\"",
  description: "Replaces every S with 1.",
  run: (value) => String(value).split("S").join("1"),
});

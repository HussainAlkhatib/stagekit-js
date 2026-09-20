'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2820",
  name: "Replace \"F\" with \"1\"",
  description: "Replaces every F with 1.",
  run: (value) => String(value).split("F").join("1"),
});

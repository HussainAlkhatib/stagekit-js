'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0990",
  name: "Replace \"d\" with \"1\"",
  description: "Replaces every d with 1.",
  run: (value) => String(value).split("d").join("1"),
});

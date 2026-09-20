'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4285",
  name: "Replace \"3\" with \"1\"",
  description: "Replaces every 3 with 1.",
  run: (value) => String(value).split("3").join("1"),
});

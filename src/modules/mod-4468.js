'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4468",
  name: "Replace \"6\" with \"1\"",
  description: "Replaces every 6 with 1.",
  run: (value) => String(value).split("6").join("1"),
});

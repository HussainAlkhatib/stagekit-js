'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4529",
  name: "Replace \"7\" with \"1\"",
  description: "Replaces every 7 with 1.",
  run: (value) => String(value).split("7").join("1"),
});

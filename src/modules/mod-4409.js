'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4409",
  name: "Replace \"5\" with \"3\"",
  description: "Replaces every 5 with 3.",
  run: (value) => String(value).split("5").join("3"),
});

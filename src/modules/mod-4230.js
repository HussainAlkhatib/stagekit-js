'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4230",
  name: "Replace \"2\" with \"8\"",
  description: "Replaces every 2 with 8.",
  run: (value) => String(value).split("2").join("8"),
});

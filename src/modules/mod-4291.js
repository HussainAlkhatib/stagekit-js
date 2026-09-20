'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4291",
  name: "Replace \"3\" with \"8\"",
  description: "Replaces every 3 with 8.",
  run: (value) => String(value).split("3").join("8"),
});

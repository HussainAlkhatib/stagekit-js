'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1668",
  name: "Replace \"m\" with \"8\"",
  description: "Replaces every m with 8.",
  run: (value) => String(value).split("m").join("8"),
});

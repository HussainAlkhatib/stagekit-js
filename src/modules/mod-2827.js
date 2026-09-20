'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2827",
  name: "Replace \"F\" with \"8\"",
  description: "Replaces every F with 8.",
  run: (value) => String(value).split("F").join("8"),
});

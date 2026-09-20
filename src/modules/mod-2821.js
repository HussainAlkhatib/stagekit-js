'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2821",
  name: "Replace \"F\" with \"2\"",
  description: "Replaces every F with 2.",
  run: (value) => String(value).split("F").join("2"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2825",
  name: "Replace \"F\" with \"6\"",
  description: "Replaces every F with 6.",
  run: (value) => String(value).split("F").join("6"),
});

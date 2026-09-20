'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2824",
  name: "Replace \"F\" with \"5\"",
  description: "Replaces every F with 5.",
  run: (value) => String(value).split("F").join("5"),
});

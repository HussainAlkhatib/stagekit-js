'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2822",
  name: "Replace \"F\" with \"3\"",
  description: "Replaces every F with 3.",
  run: (value) => String(value).split("F").join("3"),
});

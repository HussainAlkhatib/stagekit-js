'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2783",
  name: "Replace \"F\" with \"p\"",
  description: "Replaces every F with p.",
  run: (value) => String(value).split("F").join("p"),
});

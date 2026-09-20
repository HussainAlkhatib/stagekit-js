'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2800",
  name: "Replace \"F\" with \"H\"",
  description: "Replaces every F with H.",
  run: (value) => String(value).split("F").join("H"),
});

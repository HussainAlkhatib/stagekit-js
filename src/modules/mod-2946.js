'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2946",
  name: "Replace \"H\" with \"5\"",
  description: "Replaces every H with 5.",
  run: (value) => String(value).split("H").join("5"),
});

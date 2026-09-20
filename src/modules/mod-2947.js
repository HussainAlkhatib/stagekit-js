'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2947",
  name: "Replace \"H\" with \"6\"",
  description: "Replaces every H with 6.",
  run: (value) => String(value).split("H").join("6"),
});

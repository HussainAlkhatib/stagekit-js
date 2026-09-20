'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2937",
  name: "Replace \"H\" with \"W\"",
  description: "Replaces every H with W.",
  run: (value) => String(value).split("H").join("W"),
});

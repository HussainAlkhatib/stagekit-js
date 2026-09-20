'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2949",
  name: "Replace \"H\" with \"8\"",
  description: "Replaces every H with 8.",
  run: (value) => String(value).split("H").join("8"),
});

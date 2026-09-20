'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2943",
  name: "Replace \"H\" with \"2\"",
  description: "Replaces every H with 2.",
  run: (value) => String(value).split("H").join("2"),
});

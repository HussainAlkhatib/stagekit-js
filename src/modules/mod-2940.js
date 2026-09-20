'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2940",
  name: "Replace \"H\" with \"Z\"",
  description: "Replaces every H with Z.",
  run: (value) => String(value).split("H").join("Z"),
});

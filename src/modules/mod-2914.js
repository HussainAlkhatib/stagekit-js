'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2914",
  name: "Replace \"H\" with \"y\"",
  description: "Replaces every H with y.",
  run: (value) => String(value).split("H").join("y"),
});

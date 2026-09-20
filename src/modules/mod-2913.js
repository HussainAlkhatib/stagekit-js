'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2913",
  name: "Replace \"H\" with \"x\"",
  description: "Replaces every H with x.",
  run: (value) => String(value).split("H").join("x"),
});

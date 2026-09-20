'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4438",
  name: "Replace \"6\" with \"x\"",
  description: "Replaces every 6 with x.",
  run: (value) => String(value).split("6").join("x"),
});

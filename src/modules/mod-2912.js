'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2912",
  name: "Replace \"H\" with \"w\"",
  description: "Replaces every H with w.",
  run: (value) => String(value).split("H").join("w"),
});

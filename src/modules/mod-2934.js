'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2934",
  name: "Replace \"H\" with \"T\"",
  description: "Replaces every H with T.",
  run: (value) => String(value).split("H").join("T"),
});

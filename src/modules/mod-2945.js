'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2945",
  name: "Replace \"H\" with \"4\"",
  description: "Replaces every H with 4.",
  run: (value) => String(value).split("H").join("4"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2944",
  name: "Replace \"H\" with \"3\"",
  description: "Replaces every H with 3.",
  run: (value) => String(value).split("H").join("3"),
});

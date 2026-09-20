'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2923",
  name: "Replace \"H\" with \"I\"",
  description: "Replaces every H with I.",
  run: (value) => String(value).split("H").join("I"),
});

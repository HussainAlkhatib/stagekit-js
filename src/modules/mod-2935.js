'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2935",
  name: "Replace \"H\" with \"U\"",
  description: "Replaces every H with U.",
  run: (value) => String(value).split("H").join("U"),
});

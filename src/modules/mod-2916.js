'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2916",
  name: "Replace \"H\" with \"A\"",
  description: "Replaces every H with A.",
  run: (value) => String(value).split("H").join("A"),
});

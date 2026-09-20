'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2899",
  name: "Replace \"H\" with \"j\"",
  description: "Replaces every H with j.",
  run: (value) => String(value).split("H").join("j"),
});

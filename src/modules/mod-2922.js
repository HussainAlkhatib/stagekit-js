'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2922",
  name: "Replace \"H\" with \"G\"",
  description: "Replaces every H with G.",
  run: (value) => String(value).split("H").join("G"),
});

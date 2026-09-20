'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2921",
  name: "Replace \"H\" with \"F\"",
  description: "Replaces every H with F.",
  run: (value) => String(value).split("H").join("F"),
});

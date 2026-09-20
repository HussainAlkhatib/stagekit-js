'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2901",
  name: "Replace \"H\" with \"l\"",
  description: "Replaces every H with l.",
  run: (value) => String(value).split("H").join("l"),
});

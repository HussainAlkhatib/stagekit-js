'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2942",
  name: "Replace \"H\" with \"1\"",
  description: "Replaces every H with 1.",
  run: (value) => String(value).split("H").join("1"),
});

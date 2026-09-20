'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2894",
  name: "Replace \"H\" with \"e\"",
  description: "Replaces every H with e.",
  run: (value) => String(value).split("H").join("e"),
});

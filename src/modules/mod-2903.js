'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2903",
  name: "Replace \"H\" with \"n\"",
  description: "Replaces every H with n.",
  run: (value) => String(value).split("H").join("n"),
});

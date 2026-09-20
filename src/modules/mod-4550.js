'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4550",
  name: "Replace \"8\" with \"n\"",
  description: "Replaces every 8 with n.",
  run: (value) => String(value).split("8").join("n"),
});

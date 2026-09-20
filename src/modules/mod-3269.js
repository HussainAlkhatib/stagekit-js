'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3269",
  name: "Replace \"N\" with \"n\"",
  description: "Replaces every N with n.",
  run: (value) => String(value).split("N").join("n"),
});

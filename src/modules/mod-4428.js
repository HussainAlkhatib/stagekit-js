'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4428",
  name: "Replace \"6\" with \"n\"",
  description: "Replaces every 6 with n.",
  run: (value) => String(value).split("6").join("n"),
});

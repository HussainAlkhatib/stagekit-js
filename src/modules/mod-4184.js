'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4184",
  name: "Replace \"2\" with \"n\"",
  description: "Replaces every 2 with n.",
  run: (value) => String(value).split("2").join("n"),
});

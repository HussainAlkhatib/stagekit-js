'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4123",
  name: "Replace \"1\" with \"n\"",
  description: "Replaces every 1 with n.",
  run: (value) => String(value).split("1").join("n"),
});

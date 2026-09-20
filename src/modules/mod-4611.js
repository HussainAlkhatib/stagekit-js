'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4611",
  name: "Replace \"9\" with \"n\"",
  description: "Replaces every 9 with n.",
  run: (value) => String(value).split("9").join("n"),
});

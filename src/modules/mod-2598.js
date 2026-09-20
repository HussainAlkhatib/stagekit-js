'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2598",
  name: "Replace \"C\" with \"n\"",
  description: "Replaces every C with n.",
  run: (value) => String(value).split("C").join("n"),
});

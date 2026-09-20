'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2537",
  name: "Replace \"B\" with \"n\"",
  description: "Replaces every B with n.",
  run: (value) => String(value).split("B").join("n"),
});

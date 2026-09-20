'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0497",
  name: "Replace \"b\" with \"n\"",
  description: "Replaces every b with n.",
  run: (value) => String(value).split("b").join("n"),
});

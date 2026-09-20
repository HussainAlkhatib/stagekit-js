'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3731",
  name: "Replace \"U\" with \"X\"",
  description: "Replaces every U with X.",
  run: (value) => String(value).split("U").join("X"),
});

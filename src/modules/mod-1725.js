'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1725",
  name: "Replace \"n\" with \"4\"",
  description: "Replaces every n with 4.",
  run: (value) => String(value).split("n").join("4"),
});

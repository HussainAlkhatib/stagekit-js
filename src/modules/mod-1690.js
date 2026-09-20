'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1690",
  name: "Replace \"n\" with \"v\"",
  description: "Replaces every n with v.",
  run: (value) => String(value).split("n").join("v"),
});

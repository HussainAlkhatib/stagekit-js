'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2020",
  name: "Replace \"s\" with \"U\"",
  description: "Replaces every s with U.",
  run: (value) => String(value).split("s").join("U"),
});

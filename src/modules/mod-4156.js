'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4156",
  name: "Replace \"1\" with \"U\"",
  description: "Replaces every 1 with U.",
  run: (value) => String(value).split("1").join("U"),
});

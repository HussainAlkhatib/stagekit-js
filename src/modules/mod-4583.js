'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4583",
  name: "Replace \"8\" with \"U\"",
  description: "Replaces every 8 with U.",
  run: (value) => String(value).split("8").join("U"),
});

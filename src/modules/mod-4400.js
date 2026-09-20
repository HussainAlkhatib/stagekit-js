'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4400",
  name: "Replace \"5\" with \"U\"",
  description: "Replaces every 5 with U.",
  run: (value) => String(value).split("5").join("U"),
});

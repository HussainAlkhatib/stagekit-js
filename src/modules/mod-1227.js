'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1227",
  name: "Replace \"f\" with \"U\"",
  description: "Replaces every f with U.",
  run: (value) => String(value).split("f").join("U"),
});

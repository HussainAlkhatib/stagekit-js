'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1593",
  name: "Replace \"l\" with \"U\"",
  description: "Replaces every l with U.",
  run: (value) => String(value).split("l").join("U"),
});

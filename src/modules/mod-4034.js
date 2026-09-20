'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4034",
  name: "Replace \"Z\" with \"U\"",
  description: "Replaces every Z with U.",
  run: (value) => String(value).split("Z").join("U"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3057",
  name: "Replace \"J\" with \"U\"",
  description: "Replaces every J with U.",
  run: (value) => String(value).split("J").join("U"),
});

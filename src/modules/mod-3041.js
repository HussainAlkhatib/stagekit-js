'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3041",
  name: "Replace \"J\" with \"D\"",
  description: "Replaces every J with D.",
  run: (value) => String(value).split("J").join("D"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3034",
  name: "Replace \"J\" with \"w\"",
  description: "Replaces every J with w.",
  run: (value) => String(value).split("J").join("w"),
});

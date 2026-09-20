'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3071",
  name: "Replace \"J\" with \"8\"",
  description: "Replaces every J with 8.",
  run: (value) => String(value).split("J").join("8"),
});

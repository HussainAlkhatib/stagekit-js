'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3029",
  name: "Replace \"J\" with \"r\"",
  description: "Replaces every J with r.",
  run: (value) => String(value).split("J").join("r"),
});

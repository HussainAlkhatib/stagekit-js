'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3067",
  name: "Replace \"J\" with \"4\"",
  description: "Replaces every J with 4.",
  run: (value) => String(value).split("J").join("4"),
});

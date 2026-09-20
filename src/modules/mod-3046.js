'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3046",
  name: "Replace \"J\" with \"I\"",
  description: "Replaces every J with I.",
  run: (value) => String(value).split("J").join("I"),
});

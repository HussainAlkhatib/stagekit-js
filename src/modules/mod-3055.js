'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3055",
  name: "Replace \"J\" with \"S\"",
  description: "Replaces every J with S.",
  run: (value) => String(value).split("J").join("S"),
});

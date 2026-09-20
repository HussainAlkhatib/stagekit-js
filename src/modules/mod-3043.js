'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3043",
  name: "Replace \"J\" with \"F\"",
  description: "Replaces every J with F.",
  run: (value) => String(value).split("J").join("F"),
});

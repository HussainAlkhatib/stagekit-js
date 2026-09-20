'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3068",
  name: "Replace \"J\" with \"5\"",
  description: "Replaces every J with 5.",
  run: (value) => String(value).split("J").join("5"),
});

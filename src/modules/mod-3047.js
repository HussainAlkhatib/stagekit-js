'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3047",
  name: "Replace \"J\" with \"K\"",
  description: "Replaces every J with K.",
  run: (value) => String(value).split("J").join("K"),
});

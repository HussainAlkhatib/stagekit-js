'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2314",
  name: "Replace \"x\" with \"J\"",
  description: "Replaces every x with J.",
  run: (value) => String(value).split("x").join("J"),
});

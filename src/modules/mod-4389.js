'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4389",
  name: "Replace \"5\" with \"J\"",
  description: "Replaces every 5 with J.",
  run: (value) => String(value).split("5").join("J"),
});

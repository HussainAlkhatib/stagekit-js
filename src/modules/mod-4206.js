'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4206",
  name: "Replace \"2\" with \"J\"",
  description: "Replaces every 2 with J.",
  run: (value) => String(value).split("2").join("J"),
});

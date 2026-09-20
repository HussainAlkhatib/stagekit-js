'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4572",
  name: "Replace \"8\" with \"J\"",
  description: "Replaces every 8 with J.",
  run: (value) => String(value).split("8").join("J"),
});

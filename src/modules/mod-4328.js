'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4328",
  name: "Replace \"4\" with \"J\"",
  description: "Replaces every 4 with J.",
  run: (value) => String(value).split("4").join("J"),
});

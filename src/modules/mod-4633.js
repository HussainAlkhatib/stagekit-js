'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4633",
  name: "Replace \"9\" with \"J\"",
  description: "Replaces every 9 with J.",
  run: (value) => String(value).split("9").join("J"),
});

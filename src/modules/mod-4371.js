'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4371",
  name: "Replace \"5\" with \"r\"",
  description: "Replaces every 5 with r.",
  run: (value) => String(value).split("5").join("r"),
});

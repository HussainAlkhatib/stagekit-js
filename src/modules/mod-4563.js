'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4563",
  name: "Replace \"8\" with \"A\"",
  description: "Replaces every 8 with A.",
  run: (value) => String(value).split("8").join("A"),
});

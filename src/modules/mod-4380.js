'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4380",
  name: "Replace \"5\" with \"A\"",
  description: "Replaces every 5 with A.",
  run: (value) => String(value).split("5").join("A"),
});

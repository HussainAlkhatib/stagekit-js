'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4197",
  name: "Replace \"2\" with \"A\"",
  description: "Replaces every 2 with A.",
  run: (value) => String(value).split("2").join("A"),
});

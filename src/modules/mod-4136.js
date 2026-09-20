'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4136",
  name: "Replace \"1\" with \"A\"",
  description: "Replaces every 1 with A.",
  run: (value) => String(value).split("1").join("A"),
});

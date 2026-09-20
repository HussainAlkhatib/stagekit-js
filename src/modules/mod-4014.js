'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4014",
  name: "Replace \"Z\" with \"A\"",
  description: "Replaces every Z with A.",
  run: (value) => String(value).split("Z").join("A"),
});

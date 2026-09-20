'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4319",
  name: "Replace \"4\" with \"A\"",
  description: "Replaces every 4 with A.",
  run: (value) => String(value).split("4").join("A"),
});

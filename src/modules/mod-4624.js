'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4624",
  name: "Replace \"9\" with \"A\"",
  description: "Replaces every 9 with A.",
  run: (value) => String(value).split("9").join("A"),
});

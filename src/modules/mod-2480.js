'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2480",
  name: "Replace \"A\" with \"r\"",
  description: "Replaces every A with r.",
  run: (value) => String(value).split("A").join("r"),
});

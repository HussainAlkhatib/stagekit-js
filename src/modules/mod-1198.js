'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1198",
  name: "Replace \"f\" with \"r\"",
  description: "Replaces every f with r.",
  run: (value) => String(value).split("f").join("r"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3895",
  name: "Replace \"X\" with \"D\"",
  description: "Replaces every X with D.",
  run: (value) => String(value).split("X").join("D"),
});

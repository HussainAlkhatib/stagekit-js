'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1176",
  name: "Replace \"e\" with \"4\"",
  description: "Replaces every e with 4.",
  run: (value) => String(value).split("e").join("4"),
});

'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1177",
  name: "Replace \"e\" with \"5\"",
  description: "Replaces every e with 5.",
  run: (value) => String(value).split("e").join("5"),
});

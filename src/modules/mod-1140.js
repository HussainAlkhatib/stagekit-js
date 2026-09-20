'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1140",
  name: "Replace \"e\" with \"Q\"",
  description: "Replaces every e with Q.",
  run: (value) => String(value).split("e").join("Q"),
});

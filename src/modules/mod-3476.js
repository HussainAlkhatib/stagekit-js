'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3476",
  name: "Replace \"Q\" with \"L\"",
  description: "Replaces every Q with L.",
  run: (value) => String(value).split("Q").join("L"),
});
